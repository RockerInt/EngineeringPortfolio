import { getCollection, type CollectionEntry } from 'astro:content';
import { href, type Lang, type SectionKey } from '@/i18n/routes';

export type Project = CollectionEntry<'projects'>;
export type Job = CollectionEntry<'experience'>;

const langOf = (id: string) => id.split('/')[0];
export const slugOf = (id: string) => id.split('/')[1] ?? id;

export async function getProjects(lang: Lang, section?: SectionKey): Promise<Project[]> {
  const all = await getCollection('projects', (p) => langOf(p.id) === lang && (!section || p.data.section === section));
  return all.toSorted((a, b) => a.data.order - b.data.order);
}

export async function getJobs(lang: Lang): Promise<Job[]> {
  const all = await getCollection('experience', (j) => langOf(j.id) === lang);
  return all.toSorted((a, b) => a.data.order - b.data.order);
}

/** Each project has exactly one canonical URL, under the section that owns it. */
export const projectHref = (lang: Lang, project: Project) => href(lang, project.data.section, slugOf(project.id));
