import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain. Override with SITE_URL only to build for another host.
const site = process.env.SITE_URL ?? 'https://engineering.jjimenez.net';

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [sitemap()],
  // Emit scripts as files so the Content-Security-Policy in public/_headers can forbid inline scripts.
  vite: { build: { assetsInlineLimit: 0 } },
});
