import { existsSync } from 'node:fs';
import type { Lang } from '@/i18n/routes';

/** Confirmed identity data only. No phone number is published. */
export const SITE = {
  name: 'Jonathan Jiménez',
  email: 'contact@jjimenez.net',
  github: 'https://github.com/RockerInt',
  linkedin: 'https://www.linkedin.com/in/jonathanjimenezdevelopment/',
} as const;

const resumePath = (lang: Lang) => `/resume/jonathan-jimenez-cv-${lang}.pdf`;

/** Returns the public URL of a résumé PDF only if the file really exists. */
export function resumeFile(lang: Lang): string | undefined {
  const path = resumePath(lang);
  return existsSync(`public${path}`) ? path : undefined;
}
