// Post-build check: fails if the built site has broken internal links, missing
// SEO basics, or wording that breaks the content rules in docs/context/.
// Run with `npm run verify` after `npm run build`.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
// Wording that would imply an academic degree or unconfirmed claims.
const FORBIDDEN = [
  /\bgraduat\w*/i,
  /\bdegrees?\b/i,
  /\bB\.?\s?(Sc|Eng)\b/,
  /\bbachelor/i,
  /\bgraduad[oa]\b/i,
  /\btitulad[oa]\b/i,
  /\bingeniero (de sistemas|inform[aá]tico|graduado)\b/i,
  /\b(computer|systems) engineer\b(?!ing)/i,
  /lorem ipsum/i,
  /world-class|industry-leading|\b10x\b/i,
  /href="tel:/i, // no phone number is published
  /[\w.+-]+@(?!jjimenez\.net\b)[\w-]+\.[a-z]{2,}/i, // any address outside the confirmed domain
  /(?<!contact)@jjimenez\.net/i, // only contact@jjimenez.net is confirmed
];

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]));

const resolves = (url) => {
  let path;
  try {
    path = join(DIST, decodeURIComponent(url.split(/[?#]/)[0]));
  } catch {
    return false; // malformed percent-encoding
  }
  return existsSync(path.endsWith('/') ? join(path, 'index.html') : path);
};

const pages = walk(DIST).filter((f) => f.endsWith('.html'));
const problems = [];
let usesLocalhost = false;

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const name = '/' + relative(DIST, file);
  const fail = (message) => problems.push(`${name}: ${message}`);
  const is404 = name === '/404.html';

  const urls = [...html.matchAll(/(?:href|src)="(\/[^"]*)"/g)].map((m) => m[1]);
  const srcsets = [...html.matchAll(/srcset="([^"]+)"/g)].flatMap((m) => m[1].split(',').map((s) => s.trim().split(' ')[0]));
  for (const url of new Set([...urls, ...srcsets])) if (!resolves(url)) fail(`broken link ${url}`);

  // Checked against the full markup so meta tags, alt text, aria-labels and JSON-LD are covered too.
  for (const pattern of FORBIDDEN) {
    const hit = html.match(pattern);
    if (hit) fail(`forbidden wording "${hit[0]}"`);
  }

  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) fail(`expected one <h1>, found ${h1}`);
  // Heading levels must not skip (h1 -> h3) anywhere on the page.
  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  if (levels.some((level, i) => level > (levels[i - 1] ?? 0) + 1)) fail(`skipped heading level (${levels.join(' ')})`);
  const expectedLang = name.startsWith('/es/') ? 'es' : 'en';
  if (!html.includes(`<html lang="${expectedLang}"`)) fail(`<html lang> should be ${expectedLang}`);
  if (!/<title>[^<]+<\/title>/.test(html)) fail('missing <title>');
  if (/<img(?![^>]*\balt[\s=>])/.test(html)) fail('<img> without alt');
  if (/<img(?![^>]*\bwidth=)/.test(html)) fail('<img> without width');
  if (!is404) {
    if (!/<meta name="description" content="[^"]{50,}"/.test(html)) fail('missing or short meta description');
    if (!html.includes('rel="canonical"')) fail('missing canonical');
    const alternates = [...html.matchAll(/<link rel="(?:canonical|alternate)"(?: hreflang="([^"]+)")? href="([^"]+)"/g)];
    const langs = alternates.map((m) => m[1]).filter(Boolean);
    for (const lang of ['en', 'es', 'x-default']) if (!langs.includes(lang)) fail(`missing hreflang ${lang}`);
    for (const [, , url] of alternates) {
      if (!URL.canParse(url)) fail(`invalid canonical/alternate URL ${url}`);
      else if (!resolves(new URL(url).pathname)) fail(`canonical/alternate points to a missing page ${url}`);
      else if (new URL(url).hostname === 'localhost') usesLocalhost = true;
    }
  }
}

const titles = pages.map((f) => readFileSync(f, 'utf8').match(/<title>([^<]+)/)?.[1]);
if (new Set(titles).size !== titles.length) problems.push('duplicate <title> across pages');
for (const required of ['robots.txt', 'sitemap-index.xml', 'favicon.svg', 'og.png', '_headers', '404.html']) {
  if (!existsSync(join(DIST, required))) problems.push(`missing ${required}`);
}

// A localhost canonical is expected locally, but must never be deployed.
if (usesLocalhost) {
  const message = 'canonical URLs point to localhost: unset SITE_URL before deploying';
  if (process.env.WORKERS_CI) problems.push(message);
  else console.warn(`! ${message}`);
}

if (problems.length) {
  console.error(`✗ ${problems.length} problem(s):\n` + problems.map((p) => '  - ' + p).join('\n'));
  process.exit(1);
}
console.log(`✓ ${pages.length} pages verified: internal links, headings, lang, SEO tags and content rules.`);
