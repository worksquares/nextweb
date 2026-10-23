#!/usr/bin/env bash
# Operator-run OVH deployment for the DigiSquares website.

set -Eeuo pipefail
umask 027

# Keep executing a private copy so a future release can safely change this file.
if [ "${NEXTWEB_DEPLOY_DETACHED:-}" != "1" ]; then
  self_copy="$(mktemp /tmp/nextweb-deploy.XXXXXX.sh)"
  cp -- "$0" "$self_copy"
  chmod 0700 "$self_copy"
  NEXTWEB_DEPLOY_DETACHED=1 NEXTWEB_DEPLOY_SELF_COPY="$self_copy" exec "$self_copy" "$@"
fi

APP_NAME="nextweb"
STACK_DIR="/opt/digisquares-web"
REPO_DIR="${STACK_DIR}/site"
COMPOSE_FILE="${STACK_DIR}/docker-compose.yml"
SERVICE="web"
STABLE_IMAGE="worksquares/nextweb:ovh"
HEALTH_URL="http://127.0.0.1:4200/"
SCRIPT_PATH="${REPO_DIR}/deploy/deploy-ovh.sh"
EXPECTED_ORIGIN="git@github.com:worksquares/nextweb.git"
DEPLOY_KEY="/home/ubuntu/.ssh/worksquares-deploy/nextweb.ed25519"
SSH_COMMAND="ssh -i ${DEPLOY_KEY} -o IdentitiesOnly=yes -o BatchMode=yes -o StrictHostKeyChecking=yes"
LOCK_FILE="/tmp/worksquares-deploy.lock"
EVIDENCE_DIR="${STACK_DIR}/deploy-evidence"
TARGET_REF="${1:-origin/main}"
MAX_ATTEMPTS=20
SLEEP_SECONDS=3

WORK_DIR=""
EVIDENCE_FILE=""
TARGET_SHA=""
ARCHIVE_SHA256=""
CANDIDATE_IMAGE=""
CANDIDATE_IMAGE_ID=""
ROLLBACK_IMAGE=""
ROLLBACK_IMAGE_ID=""
RUNNING_CONTAINER_ID=""
RUNNING_IMAGE_ID=""
RUNNING_IMAGE_LABEL=""
LAST_HTTP_CODE="000"
LAST_CONTAINER_ID=""
LAST_CONTAINER_IMAGE_ID=""
SERVICE_MUTATED=false
ROLLBACK_ACTIVE=false
EVIDENCE_COMMITTED=false

die() {
  echo "ERROR: $*" >&2
  exit 1
}

compose() {
  (cd "$STACK_DIR" && sudo docker compose -f "$COMPOSE_FILE" "$@")
}

record() {
  [ -n "$EVIDENCE_FILE" ] || return 0
  printf '%s=%s\n' "$1" "$2" >>"$EVIDENCE_FILE"
}

finalize_evidence() {
  [ -n "$EVIDENCE_FILE" ] || return 0
  record completed_at "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
  chmod 0640 "$EVIDENCE_FILE"
  sync -f "$EVIDENCE_FILE"
  EVIDENCE_COMMITTED=true
  echo "Evidence: $EVIDENCE_FILE"
}

cleanup() {
  if [ -n "$WORK_DIR" ]; then
    case "$WORK_DIR" in
      /tmp/nextweb-release.*) rm -rf -- "$WORK_DIR" ;;
      *) echo "WARNING: refusing to remove unexpected work directory '$WORK_DIR'" >&2 ;;
    esac
  fi
  case "${NEXTWEB_DEPLOY_SELF_COPY:-}" in
    /tmp/nextweb-deploy.*.sh) rm -f -- "$NEXTWEB_DEPLOY_SELF_COPY" ;;
    "") ;;
    *) echo "WARNING: refusing to remove unexpected self-copy '${NEXTWEB_DEPLOY_SELF_COPY}'" >&2 ;;
  esac
}

wait_for_health() {
  local expected_image_id="$1"
  local attempt=1

  while [ "$attempt" -le "$MAX_ATTEMPTS" ]; do
    LAST_HTTP_CODE="$(curl -sS -o /dev/null --max-time 5 -w '%{http_code}' "$HEALTH_URL" 2>/dev/null || true)"
    LAST_CONTAINER_ID="$(compose ps -q "$SERVICE" 2>/dev/null || true)"
    LAST_CONTAINER_IMAGE_ID=""
    if [ -n "$LAST_CONTAINER_ID" ]; then
      LAST_CONTAINER_IMAGE_ID="$(sudo docker inspect --format '{{.Image}}' "$LAST_CONTAINER_ID" 2>/dev/null || true)"
    fi

    if [ "$LAST_HTTP_CODE" = "200" ] && [ "$LAST_CONTAINER_IMAGE_ID" = "$expected_image_id" ]; then
      echo "Health attempt $attempt/$MAX_ATTEMPTS: HTTP 200, exact image $LAST_CONTAINER_IMAGE_ID"
      return 0
    fi

    echo "Health attempt $attempt/$MAX_ATTEMPTS: HTTP ${LAST_HTTP_CODE:-000}, image ${LAST_CONTAINER_IMAGE_ID:-unavailable}; waiting"
    sleep "$SLEEP_SECONDS"
    attempt=$((attempt + 1))
  done
  return 1
}

rollback_exact_image() {
  ROLLBACK_ACTIVE=true
  echo "Restoring the exact pre-deploy image $ROLLBACK_IMAGE_ID" >&2
  sudo docker image inspect "$ROLLBACK_IMAGE_ID" >/dev/null 2>&1 || return 1
  sudo docker tag "$ROLLBACK_IMAGE_ID" "$STABLE_IMAGE" || return 1
  [ "$(sudo docker image inspect --format '{{.Id}}' "$STABLE_IMAGE")" = "$ROLLBACK_IMAGE_ID" ] || return 1
  compose up -d --force-recreate --no-deps --no-build --pull never "$SERVICE" || return 1
  wait_for_health "$ROLLBACK_IMAGE_ID" || return 1
  SERVICE_MUTATED=false
  ROLLBACK_ACTIVE=false
  return 0
}

on_exit() {
  local status="$1"
  trap - EXIT
  trap '' INT TERM

  if [ "$SERVICE_MUTATED" = true ] && [ "$EVIDENCE_COMMITTED" != true ]; then
    [ "$status" -ne 0 ] || status=1
    record deployment_failure "process_exited_before_evidence_commit" || true
    record rollback_attempted true || true
    if rollback_exact_image; then
      record rollback_outcome success || true
      record outcome rolled_back || true
      record final_image_id "$ROLLBACK_IMAGE_ID" || true
      record final_http_code "$LAST_HTTP_CODE" || true
      echo "Rollback succeeded. The requested deployment remains failed." >&2
    else
      record rollback_outcome failed || true
      record outcome rollback_failed || true
      record final_http_code "${LAST_HTTP_CODE:-000}" || true
      compose logs --tail 60 "$SERVICE" >&2 || true
      echo "CRITICAL: exact-image rollback failed; inspect $COMPOSE_FILE and $EVIDENCE_FILE" >&2
      status=1
    fi
    finalize_evidence || true
  elif [ -n "$EVIDENCE_FILE" ] && [ "$EVIDENCE_COMMITTED" != true ]; then
    [ "$status" -ne 0 ] || status=1
    record outcome failed_before_service_mutation || true
    record service_changed false || true
    finalize_evidence || true
  fi

  cleanup
  exit "$status"
}

trap 'exit 130' INT
trap 'exit 143' TERM
trap 'on_exit "$?"' EXIT

case "$TARGET_REF" in
  ""|-*|*[!A-Za-z0-9._/@:+~-]*)
    die "invalid git ref '$TARGET_REF'; use a branch, tag, or full commit SHA"
    ;;
esac

[ "$(id -un)" = "ubuntu" ] || die "run as ubuntu without sudo: bash ${SCRIPT_PATH} [git-ref]"
for command_name in git ssh stat flock curl sudo docker python3 tar sha256sum find; do
  command -v "$command_name" >/dev/null 2>&1 || die "required command '$command_name' is unavailable"
done

[ -f "$DEPLOY_KEY" ] || die "read-only deploy key missing: $DEPLOY_KEY"
[ "$(stat -c '%U' "$DEPLOY_KEY")" = "ubuntu" ] || die "$DEPLOY_KEY must be owned by ubuntu"
case "$(stat -c '%a' "$DEPLOY_KEY")" in
  400|600) ;;
  *) die "$DEPLOY_KEY must have mode 400 or 600" ;;
esac

if [ -e "$LOCK_FILE" ] && [ "$(stat -c '%U' "$LOCK_FILE")" != "ubuntu" ]; then
  die "$LOCK_FILE is not owned by ubuntu; do not bypass the estate deploy lock"
fi
exec 9>"$LOCK_FILE"
flock -w 900 9 || die "another WorkSquares deploy holds $LOCK_FILE (waited 15 minutes)"

[ -d "$REPO_DIR/.git" ] || die "$REPO_DIR is not a git checkout; follow deploy/DEPLOY.md"
[ -f "$COMPOSE_FILE" ] || die "$COMPOSE_FILE is missing"
[ -w "$REPO_DIR" ] || die "$REPO_DIR is not writable by ubuntu"

origin_url="$(git -C "$REPO_DIR" remote get-url origin)"
[ "$origin_url" = "$EXPECTED_ORIGIN" ] || die "origin must be exactly $EXPECTED_ORIGIN; credential-bearing or unexpected origins are rejected"

assert_no_repo_secrets() {
  local secret_path=""
  secret_path="$(find "$REPO_DIR" -type f \( -name '.env' -o -name '.env.*' -o -name '.npmrc' \) ! -name '.env.example' -print -quit)"
  [ -z "$secret_path" ] || die "secret-bearing file found inside checkout: $secret_path"
}

assert_clean_checkout() {
  git -C "$REPO_DIR" diff --quiet --ignore-submodules -- || die "tracked checkout has unstaged changes"
  git -C "$REPO_DIR" diff --cached --quiet --ignore-submodules -- || die "tracked checkout has staged changes"
  local untracked=""
  untracked="$(git -C "$REPO_DIR" ls-files --others --exclude-standard)"
  [ -z "$untracked" ] || die "checkout has untracked files; archive or remove them before deployment"
  assert_no_repo_secrets
}

assert_clean_checkout
WORK_DIR="$(mktemp -d /tmp/nextweb-release.XXXXXX)"
chmod 0700 "$WORK_DIR"
COMPOSE_JSON="${WORK_DIR}/compose.json"

# Resolve and validate the external Compose contract before changing any image tag or service.
compose config --format json >"$COMPOSE_JSON"
chmod 0600 "$COMPOSE_JSON"
python3 - "$COMPOSE_JSON" "$SERVICE" "$STABLE_IMAGE" "127.0.0.1" "4200" "80" <<'PY'
import json
import sys

path, service_name, expected_image, host_ip, published, target = sys.argv[1:]
with open(path, encoding="utf-8") as handle:
    config = json.load(handle)
service = config.get("services", {}).get(service_name)
if not isinstance(service, dict):
    raise SystemExit(f"Compose service {service_name!r} is missing")
if service.get("image") != expected_image:
    raise SystemExit(f"Compose service must use exact image {expected_image!r}")
if service.get("build") is not None:
    raise SystemExit("Compose build is forbidden; deployment builds an immutable archived source directly")
ports = service.get("ports") or []
if len(ports) != 1 or not isinstance(ports[0], dict):
    raise SystemExit("Compose service must publish exactly one structured port mapping")
port = ports[0]
if (
    str(port.get("host_ip")) != host_ip
    or str(port.get("published")) != published
    or str(port.get("target")) != target
    or str(port.get("protocol", "tcp")) != "tcp"
):
    raise SystemExit(f"Compose port must be exactly {host_ip}:{published}:{target}/tcp")
PY

echo "=== $APP_NAME OVH deploy ==="
echo "Requested ref: $TARGET_REF"
echo "Started: $(date -Is)"

git -C "$REPO_DIR" -c core.sshCommand="$SSH_COMMAND" fetch --prune --tags origin
TARGET_SHA="$(git -C "$REPO_DIR" rev-parse --verify "${TARGET_REF}^{commit}")" || die "cannot resolve '$TARGET_REF' to a commit"
printf '%s' "$TARGET_SHA" | grep -Eq '^[0-9a-f]{40}$' || die "resolved target is not a full commit SHA"

target_secret="$(git -C "$REPO_DIR" ls-tree -r --name-only "$TARGET_SHA" | grep -E '(^|/)(\.env($|\.)|\.npmrc$)' | grep -v -E '(^|/)\.env\.example$' | head -n 1 || true)"
[ -z "$target_secret" ] || die "target commit contains a forbidden secret path: $target_secret"

RUNNING_CONTAINER_ID="$(compose ps -q "$SERVICE" 2>/dev/null || true)"
[ -n "$RUNNING_CONTAINER_ID" ] || die "service '$SERVICE' has no running container; exact-image rollback cannot be guaranteed"
[ "$(sudo docker inspect --format '{{.State.Running}}' "$RUNNING_CONTAINER_ID")" = "true" ] || die "current service container is not running"
RUNNING_IMAGE_ID="$(sudo docker inspect --format '{{.Image}}' "$RUNNING_CONTAINER_ID")"
printf '%s' "$RUNNING_IMAGE_ID" | grep -Eq '^sha256:[0-9a-f]{64}$' || die "cannot capture the current immutable image ID"
sudo docker image inspect "$RUNNING_IMAGE_ID" >/dev/null || die "current image $RUNNING_IMAGE_ID is unavailable locally"
RUNNING_IMAGE_LABEL="$(sudo docker image inspect --format '{{ index .Config.Labels "org.opencontainers.image.revision" }}' "$RUNNING_IMAGE_ID" 2>/dev/null || true)"
case "$RUNNING_IMAGE_LABEL" in
  ""|"<no value>") RUNNING_IMAGE_LABEL="unlabelled" ;;
esac

RUN_ID="$(date -u +%Y%m%dT%H%M%SZ)-$$"
CANDIDATE_IMAGE="worksquares/nextweb:sha-${TARGET_SHA}"
ROLLBACK_IMAGE="worksquares/nextweb:rollback-${RUN_ID}"
sudo install -d -o ubuntu -g ubuntu -m 0750 "$EVIDENCE_DIR"
EVIDENCE_FILE="${EVIDENCE_DIR}/${RUN_ID}-${TARGET_SHA}.txt"
install -m 0640 /dev/null "$EVIDENCE_FILE"

record app "$APP_NAME"
record operator "$(id -un)"
record requested_ref "$TARGET_REF"
record target_sha "$TARGET_SHA"
record stable_image "$STABLE_IMAGE"
record candidate_image "$CANDIDATE_IMAGE"
record previous_container_id "$RUNNING_CONTAINER_ID"
record previous_image_id "$RUNNING_IMAGE_ID"
record previous_image_revision "$RUNNING_IMAGE_LABEL"
record rollback_image "$ROLLBACK_IMAGE"
record compose_file "$COMPOSE_FILE"
record compose_contract "${SERVICE}|${STABLE_IMAGE}|127.0.0.1:4200:80/tcp|build=none"
record health_url "$HEALTH_URL"
record started_at "$(date -u +%Y-%m-%dT%H:%M:%SZ)"

# Preserve the exact running image before candidate build; labels are not required.
sudo docker tag "$RUNNING_IMAGE_ID" "$ROLLBACK_IMAGE"
ROLLBACK_IMAGE_ID="$(sudo docker image inspect --format '{{.Id}}' "$ROLLBACK_IMAGE")"
[ "$ROLLBACK_IMAGE_ID" = "$RUNNING_IMAGE_ID" ] || die "rollback tag does not reference the exact running image"
record rollback_image_id "$ROLLBACK_IMAGE_ID"

SOURCE_ARCHIVE="${WORK_DIR}/source.tar"
SOURCE_DIR="${WORK_DIR}/source"
mkdir -m 0700 "$SOURCE_DIR"
git -C "$REPO_DIR" archive --format=tar --output="$SOURCE_ARCHIVE" "$TARGET_SHA"
ARCHIVE_SHA256="$(sha256sum "$SOURCE_ARCHIVE" | awk '{print $1}')"
printf '%s' "$ARCHIVE_SHA256" | grep -Eq '^[0-9a-f]{64}$' || die "cannot calculate source archive SHA256"
tar -xf "$SOURCE_ARCHIVE" -C "$SOURCE_DIR"
record source_archive_sha256 "$ARCHIVE_SHA256"

echo "Building $CANDIDATE_IMAGE from archived commit $TARGET_SHA (archive $ARCHIVE_SHA256)"
if ! sudo docker build --pull=false --build-arg "BUILD_SHA=$TARGET_SHA" --label "org.opencontainers.image.revision=$TARGET_SHA" --tag "$CANDIDATE_IMAGE" "$SOURCE_DIR"; then
  record outcome build_failed
  record service_changed false
  finalize_evidence
  die "candidate image build failed; the running service was not changed"
fi

CANDIDATE_IMAGE_ID="$(sudo docker image inspect --format '{{.Id}}' "$CANDIDATE_IMAGE")"
printf '%s' "$CANDIDATE_IMAGE_ID" | grep -Eq '^sha256:[0-9a-f]{64}$' || die "candidate image has no immutable image ID"
CANDIDATE_LABEL="$(sudo docker image inspect --format '{{ index .Config.Labels "org.opencontainers.image.revision" }}' "$CANDIDATE_IMAGE")"
[ "$CANDIDATE_LABEL" = "$TARGET_SHA" ] || die "candidate image revision label does not match $TARGET_SHA"
record candidate_image_id "$CANDIDATE_IMAGE_ID"
record candidate_image_revision "$CANDIDATE_LABEL"

SERVICE_MUTATED=true
sudo docker tag "$CANDIDATE_IMAGE_ID" "$STABLE_IMAGE"
[ "$(sudo docker image inspect --format '{{.Id}}' "$STABLE_IMAGE")" = "$CANDIDATE_IMAGE_ID" ] || die "stable image tag does not reference the candidate image"
compose up -d --force-recreate --no-deps --no-build --pull never "$SERVICE"
wait_for_health "$CANDIDATE_IMAGE_ID" || die "candidate failed HTTP or exact-image verification"

record outcome success
record final_sha "$TARGET_SHA"
record final_image_id "$CANDIDATE_IMAGE_ID"
record final_http_code "$LAST_HTTP_CODE"
record container_id "$LAST_CONTAINER_ID"
finalize_evidence

echo "=== Deploy complete ==="
echo "Commit: $TARGET_SHA"
echo "Image: $CANDIDATE_IMAGE_ID"
echo "Health: $HEALTH_URL -> HTTP $LAST_HTTP_CODE"
echo "Previous exact image retained as: $ROLLBACK_IMAGE"
echo "Completed: $(date -Is)"
