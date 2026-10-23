# DigiSquares website — direct OVH deployment

GitHub stores source and tags only (owner ruling 2026-10-17): nothing runs there, so nothing on GitHub validates, publishes an image, creates a release or deploys this site. Validate locally on the exact candidate (`npm ci --legacy-peer-deps && npm run build && test -f out/index.html`). Production deployment is an operator action on the OVH host.

## Live contract

| Item | Required value |
|---|---|
| operator | `ubuntu` (run the script without `sudo`) |
| clean Git checkout | `/opt/digisquares-web/site` |
| external Compose file | `/opt/digisquares-web/docker-compose.yml` |
| Compose service | `web` |
| stable Compose image | `worksquares/nextweb:ovh` |
| only published port | `127.0.0.1:4200:80/tcp` |
| direct health | `http://127.0.0.1:4200/` (HTTP 200) |
| token-free origin | `git@github.com:worksquares/nextweb.git` |
| read-only deploy key | `/home/ubuntu/.ssh/worksquares-deploy/nextweb.ed25519` |
| evidence | `/opt/digisquares-web/deploy-evidence/` |

## Approval blocker and one-time credential cutover

**External blocker:** a WorkSquares GitHub repository owner must confirm that organisation policy permits repository deploy keys and add this server's public key to the `nextweb` repository with **Allow write access disabled**. This cannot be solved in application code. Until the policy approval, GitHub registration, private-key installation, and host-key verification are complete, deployment is blocked. Do not fall back to a PAT or credential-bearing HTTPS URL.

The private key must be owned by `ubuntu` with mode `400` or `600`; GitHub's verified host key must already be in `/home/ubuntu/.ssh/known_hosts`. The retired workflow placed a PAT-bearing URL in the server checkout. Remove it before the first run and rotate that PAT in GitHub:

```bash
git -C /opt/digisquares-web/site remote set-url origin git@github.com:worksquares/nextweb.git
git -C /opt/digisquares-web/site remote get-url origin
git -C /opt/digisquares-web/site \
  -c core.sshCommand="ssh -i /home/ubuntu/.ssh/worksquares-deploy/nextweb.ed25519 -o IdentitiesOnly=yes -o BatchMode=yes -o StrictHostKeyChecking=yes" \
  fetch --prune origin
```

The Azure Static Web Apps token is removed from the current tree, but it remains in Git history and must be rotated in Azure.

## One-time external Compose cutover

While the current `web` container is still running and healthy, edit `/opt/digisquares-web/docker-compose.yml` so the rendered service uses the stable image and no build context:

```yaml
services:
  web:
    image: worksquares/nextweb:ovh
    ports:
      - "127.0.0.1:4200:80"
```

Remove the service's `build:` setting. Do **not** restart the service merely to make this file change: the first script run captures and tags the currently running immutable image before it builds a candidate, which supports the existing unlabelled first-cutover image. Other service settings may remain, but rendered Compose must contain exactly this image and port mapping.

Review without mutating the service:

```bash
sudo docker compose -f /opt/digisquares-web/docker-compose.yml config --format json
curl -fsS -o /dev/null http://127.0.0.1:4200/
```

## Deploy an exact release

```bash
# latest reviewed main commit
bash /opt/digisquares-web/site/deploy/deploy-ovh.sh origin/main

# exact release tag or full commit SHA
bash /opt/digisquares-web/site/deploy/deploy-ovh.sh v1.2.3
bash /opt/digisquares-web/site/deploy/deploy-ovh.sh <40-character-sha>
```

The script takes the estate-wide deployment lock; rejects a dirty checkout, unexpected origin, repository-local secrets, and an unsafe rendered Compose contract; fetches through the dedicated read-only key; and resolves the requested ref to a full commit SHA. It creates a temporary `git archive` of that SHA, records the archive SHA256, and builds `worksquares/nextweb:sha-<SHA>` directly from that archive. It never builds from or resets the mutable checkout.

Before candidate build, it captures the running container's immutable image ID and tags that exact image as `worksquares/nextweb:rollback-<RUN_ID>`. Cutover retags the candidate as `worksquares/nextweb:ovh` and recreates only `web` with `--no-build --pull never`. Success requires HTTP 200 and the exact candidate image ID. Any command failure, `INT`, or `TERM` after mutation and before durable evidence automatically retags and restarts the exact captured image, verifies its image ID and health, and leaves the requested deployment failed.

## Verify

```bash
curl -fsS -o /dev/null -w '%{http_code}\n' http://127.0.0.1:4200/  # 200
container="$(sudo docker compose -f /opt/digisquares-web/docker-compose.yml ps -q web)"
sudo docker inspect --format '{{.Image}}' "$container"
sudo docker inspect --format '{{ index .Config.Labels "org.opencontainers.image.revision" }}' "$container"
ls -lt /opt/digisquares-web/deploy-evidence | head
```

Retain the printed rollback image tag and evidence under the server's release-retention policy. Do not use `git reset`, `docker compose build`, or an ad-hoc clone as a deployment substitute; those paths bypass the archived-source, immutable rollback, health, and evidence checks.
