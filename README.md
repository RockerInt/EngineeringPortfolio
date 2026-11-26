# Jonathan Jiménez — Portfolio

Personal portfolio of Jonathan Jiménez, Software Engineer & Digital Solutions Architect.
Static, bilingual (English at `/`, Spanish at `/es/`), built with Astro and TypeScript.

Product, content and design decisions live in [`docs/context/`](docs/context/README.md). That folder is the
source of truth: nothing on the site may state unconfirmed dates, titles, metrics or academic degrees.

## Stack

- **Astro 7** (static output, no UI framework) and **strict TypeScript**
- **Content Collections** with Markdown for projects and experience
- **Native CSS** with design tokens — no Tailwind, no animation library
- **Lucide** icons, **Inter** and **JetBrains Mono** (self-hosted through Fontsource)
- Client-side JavaScript: one small script for the mobile menu

## Commands

| Command            | What it does                                                        |
| ------------------ | ------------------------------------------------------------------- |
| `pnpm install`     | Install dependencies (Node 22.23+ and pnpm)                          |
| `pnpm dev`      | Dev server at `http://localhost:4321`                               |
| `pnpm check`    | Type-check Astro and TypeScript files                               |
| `pnpm build`    | Production build into `dist/`                                       |
| `pnpm preview`  | Serve the production build locally                                  |
| `pnpm verify`   | Check the build: links, headings, `lang`, SEO tags, content rules   |
| `pnpm validate` | `check` + `build` + `verify` — run this before every deploy         |
| `pnpm resume:pdf` | Regenerate the résumé PDFs from the built site (needs Chrome)     |

## Structure

```text
src/
├── i18n/            routes.ts (every URL, both languages) · en.ts / es.ts (all UI and page copy)
├── content/
│   ├── projects/    {en,es}/<slug>.md — case studies and project data
│   └── experience/  {en,es}/<slug>.md — professional timeline
├── content.config.ts  typed schemas for both collections
├── lib/             content queries, confirmed identity links, résumé file lookup
├── styles/          tokens.css (design tokens) · global.css (base, layout, shared patterns)
├── layouts/Base.astro   <head>, SEO, hreflang, JSON-LD, header and footer
├── components/      header, footer, section, timeline, work rows, module map, CTA…
├── views/           one component per page type, rendered for both languages
└── pages/
    ├── [...path].astro  generates every route from routes.ts and the projects collection
    ├── 404.astro
    └── robots.txt.ts
scripts/verify-dist.mjs  post-build verification
```

## How to change things

**Edit copy** — `src/i18n/en.ts` and `src/i18n/es.ts`. The Spanish file must match the English shape; the
type checker reports any missing key.

**Add or edit a project** — create `src/content/projects/en/<slug>.md` and `es/<slug>.md` with the same
slug. Frontmatter is validated by `src/content.config.ts`. `section` decides the URL
(`engineering`, `digital` or `openSource`); `featured: true` puts it on the home page; `order` sorts it.
Set `kind` and `stage` only when they are confirmed — a status is never inferred from a URL existing.

**Add or edit a job** — `src/content/experience/{en,es}/<slug>.md`. Leave `period` out when dates are
not confirmed.

**Change contact details** — `src/lib/site.ts` holds the confirmed email and profile links. The
verification script rejects any other email address or a phone number in the build.

**Add a page or change a URL** — `src/i18n/routes.ts`. Navigation, the language switcher, canonical URLs
and hreflang all derive from that table.

**Replace a screenshot** — put the new image in `src/assets/projects/` and point the project's `cover`
field at it. Use real captures only; Astro generates AVIF/WebP at several widths. Always update `coverAlt`.

**Update the résumé PDFs** — the PDFs in `public/resume/` are printed from the built résumé pages
(`/resume/` and `/es/hoja-de-vida/`) with headless Chrome, so they always match the site. After changing
experience, skills or studies:

```bash
pnpm build && pnpm resume:pdf && pnpm build
```

The print layout lives in the `@media print` block of `src/styles/global.css`. Commit the regenerated
PDFs; do not hand-edit them. The original CVs in `docs/context/` are reference material only and must
not be published as they are.

## Deploying to Cloudflare

The site is fully static, so it runs as a Cloudflare Worker that only serves assets. No Astro adapter
and no server code are involved. `wrangler.jsonc` points Cloudflare at `./dist`, serves `404.html` for
unknown paths and keeps trailing slashes.

**With Workers Builds (Git integration)**

1. Push the repository to GitHub.
2. In the Cloudflare dashboard: Workers & Pages → Create → import the repository.
3. Build command: `pnpm validate` (type-check, build and verify). Deploy command: `npx wrangler deploy`
   (the default).
4. Add the custom domain `engineering.jjimenez.net` to the Worker under Settings → Domains & Routes.

**From your machine**

```bash
pnpm validate
pnpm dlx wrangler deploy
```

**What to know**

- The production URL is set in `astro.config.mjs` (`https://engineering.jjimenez.net`) and drives canonical
  URLs, hreflang, the sitemap and `robots.txt`. `SITE_URL` overrides it for a build aimed at another host.
- `public/_headers` sets the security headers, including a Content-Security-Policy that only allows
  same-origin scripts, and long-lived caching for `/_astro/*`. If you add a third-party script (analytics,
  for example), extend that policy.
- `workers.dev` URLs are served with `X-Robots-Tag: noindex`, and builds of branches other than `main`
  add a `noindex` meta tag, so only the production domain is indexed.

## Open items

Data that is still pending confirmation is tracked in
[`docs/context/08_OPEN_ITEMS.md`](docs/context/08_OPEN_ITEMS.md). The site omits anything on that list
rather than guessing.
