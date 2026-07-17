# nextweb — DigiSquares corporate website

This repository is the **DigiSquares marketing/corporate website** served at
**https://digisquares.com** (and `www.digisquares.com`). It is a
[Next.js](https://nextjs.org/) app exported as a fully static site.

> Despite living in the `worksquares` GitHub org, the content and branding here
> are **DigiSquares**, not WorkSquares. (The WorkSquares suite apps — CRM, CPQ,
> Accounts — live in their own repos: `crm`/`crmui`, `cpq`/`cpqui`,
> `accounts`/`accountsui`.)

## Stack

- **Next.js 16** (Pages Router, `pages/`) with `output: 'export'` — the build
  emits a static site to `out/`; there is no Node server at runtime.
- **UI:** Ant Design (`antd`) + Tailwind CSS.
- **i18n:** client-side `react-i18next`, 5 locales in `locales/`
  (en, zh, hi, es, ar); default `en`. Language is switched in-page, not by URL
  prefix.
- **Node:** `>=18.18.0`.

## Routing

- The landing page is `pages/index.js` (`/`).
- Every other page is a **named page inside a section folder**, not a section
  index — e.g. `/blog/CloudComputing`, `/product/…`, `/solutions/…`,
  `/pricing/AppStudio`. Section roots like `/pricing/` or `/solutions/` have no
  `index` page and will 404; navigate to them through the homepage nav/links.
- Sections: `blog/`, `product/`, `solutions/`, `pricing/`, `industry/`,
  `partners/`, `resources/`, `career/`, `contact/`, `legal/`, `more/`.

> `pages/api/*` files exist but **do not run** — `output: 'export'` cannot host
> API routes (Next.js logs a warning about this in `dev`). Treat the site as
> static-only.

## Local development

```bash
npm install
npm run dev          # webpack dev server on http://localhost:3000
```

Open http://localhost:3000. Edit `pages/index.js` (or any page) and it
hot-reloads.

## Production build

```bash
npm run build        # static export -> ./out
```

## Deployment (current: OVH, Docker + nginx)

The site was migrated off Azure Static Web Apps onto the OVH host, where it runs
as the **`digisquares-web`** container (nginx serving the exported `out/`),
fronted by the host nginx vhost for `digisquares.com` / `www.digisquares.com`.

- `Dockerfile` — multi-stage: `npm run build` in a Node stage, then copies
  `out/` into an `nginx:alpine` image (`nginx.conf` is the container config).
- Build/run the image via the host's compose stack for this site.

### Legacy Azure deploy — do not use

`deploy.bat` and the `deploy:azure` npm script target the old Azure Static Web
Apps setup and hard-code a machine path (`E:\code\nextweb\nextweb`).

> ⚠️ **Security:** the `deploy:azure` script in `package.json` contains a
> hard-coded Azure SWA **deployment token**, and this repo is **public**. That
> token should be **rotated in Azure and removed from source** (moved to a CI
> secret). Until then, treat it as compromised.

## Related sites in this org

| Repo | Site | Stack |
|------|------|-------|
| `nextweb` (this) | digisquares.com | Next.js (static export) |
| `datasquares-web` | datasquares.ai | Next.js |
| `datasquares-docs-site` | docs.datasquares.ai | Astro / Starlight |
| `shipsquares-website` | shipsquares.com | Astro |
| `wrkweb` | *(unbuilt skeleton — no site yet)* | Next.js |
