import { en, type Dict } from './en';
import { es } from './es';
import type { Lang } from './routes';

const DICTS: Record<Lang, Dict> = { en, es };

export const t = (lang: Lang): Dict => DICTS[lang];
export * from './routes';
