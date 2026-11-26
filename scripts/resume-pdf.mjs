// Generates the résumé PDFs by printing the built résumé pages with headless Chrome.
// The PDFs therefore always match the reviewed content of the site.
//
//   pnpm build && pnpm resume:pdf && pnpm build
//
// The second build copies the new PDFs into dist/ and enables the download buttons.
// Set CHROME_PATH if Chrome is not installed in the default macOS location.
import { preview } from 'astro';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { existsSync, mkdirSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Must be async: the preview server runs in this same process and has to keep answering.
const run = promisify(execFile);
const CHROME = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PAGES = [
  { path: '/resume/', file: 'public/resume/jonathan-jimenez-cv-en.pdf' },
  { path: '/es/hoja-de-vida/', file: 'public/resume/jonathan-jimenez-cv-es.pdf' },
];
const MIN_BYTES = 20_000; // a real two-page PDF with embedded fonts is far larger

if (!existsSync(CHROME)) throw new Error(`Chrome not found at ${CHROME}. Set CHROME_PATH.`);
if (!existsSync('dist/resume/index.html')) throw new Error('Build the site first: pnpm build');

mkdirSync('public/resume', { recursive: true });
const profile = mkdtempSync(join(tmpdir(), 'resume-pdf-'));
const server = await preview({ logLevel: 'error', server: { port: 4399 } });
try {
  for (const { path, file } of PAGES) {
    await run(
      CHROME,
      // An isolated profile keeps this run from attaching to a Chrome that is already open.
      ['--headless=new', `--user-data-dir=${profile}`, '--no-first-run', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=5000', `--print-to-pdf=${file}`, `http://localhost:${server.port}${path}`],
      { timeout: 60_000 },
    );
    const size = existsSync(file) ? statSync(file).size : 0;
    if (size < MIN_BYTES) throw new Error(`${file} was not generated correctly (${size} bytes)`);
    console.log(`✓ ${file} (${Math.round(size / 1024)} kB)`);
  }
} finally {
  await server.stop();
  rmSync(profile, { recursive: true, force: true });
}
process.exit(0); // the preview server can leave handles open
