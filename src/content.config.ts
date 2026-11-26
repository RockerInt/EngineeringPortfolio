import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Entries live in `<collection>/<lang>/<slug>.md`, so ids look like `en/alwon`.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      section: z.enum(['engineering', 'digital', 'openSource']),
      category: z.string(),
      summary: z.string(),
      // Only set what is confirmed. Never infer a status from the existence of a URL.
      kind: z.enum(['professional-experience', 'personal-project', 'open-source', 'freelance-project']).optional(),
      stage: z.enum(['in-development', 'delivered', 'experimental']).optional(),
      role: z.string().optional(),
      stack: z.array(z.string()).default([]),
      url: z.url().optional(),
      repo: z.url().optional(),
      license: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number(),
      /** Structured component map rendered on the detail page. */
      modules: z
        .array(z.object({ group: z.string(), name: z.string(), description: z.string(), planned: z.boolean().default(false) }))
        .default([]),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    org: z.string(),
    role: z.string(),
    /** Omit when dates are not confirmed. */
    period: z.string().optional(),
    location: z.string().optional(),
    order: z.number(),
    projects: z.array(z.object({ name: z.string(), description: z.string() })).default([]),
    stack: z.array(z.string()).default([]),
    /** Slug of a related engineering case study. */
    caseStudy: z.string().optional(),
    /** Public website of the organization. */
    url: z.url().optional(),
  }),
});

export const collections = { projects, experience };
