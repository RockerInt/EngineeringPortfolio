export const LANGS = ['en', 'es'] as const;
export type Lang = (typeof LANGS)[number];

/** Single source of truth for every top-level URL in both languages. */
export const PAGES = {
  home: { en: '', es: 'es' },
  about: { en: 'about', es: 'es/acerca-de' },
  experience: { en: 'experience', es: 'es/experiencia' },
  engineering: { en: 'engineering', es: 'es/ingenieria' },
  digital: { en: 'digital-experiences', es: 'es/experiencias-digitales' },
  openSource: { en: 'open-source', es: 'es/codigo-abierto' },
  resume: { en: 'resume', es: 'es/hoja-de-vida' },
  contact: { en: 'contact', es: 'es/contacto' },
} as const;

export type PageKey = keyof typeof PAGES;
/** Sections that own project detail pages. */
export type SectionKey = 'engineering' | 'digital' | 'openSource';

/** Header navigation. Open Source lives under Engineering there; the footer lists every page. */
export const NAV: PageKey[] = ['about', 'experience', 'engineering', 'digital', 'resume', 'contact'];
export const FOOTER_NAV: PageKey[] = ['about', 'experience', 'engineering', 'digital', 'openSource', 'resume', 'contact'];

export function href(lang: Lang, page: PageKey, sub?: string): string {
  const path = [PAGES[page][lang], sub].filter(Boolean).join('/');
  return path ? `/${path}/` : '/';
}

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'es' : 'en');
