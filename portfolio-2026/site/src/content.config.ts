import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    slug: z.string(),
    order: z.number(),
    year: z.string(),
    role: z.string(),
    scope: z.string(),
    platform: z.string(),
    status: z.string(),
    subtitle: z.string(),
    problem: z.string(),
    bet: z.string(),
    outcomeLine: z.string(),
    learned: z.string(),
    cover: z.enum(['engagement', 'wallet', 'dashboard']),
    heroDiagram: z.enum(['archetypes', 'rails', 'ia']),
    theme: z.enum(['paper', 'ink']).default('paper'),
    accent: z.enum(['cobalt', 'acid']).default('cobalt'),
    outcome: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
        note: z.string().optional(),
      }),
    ),
    meta: z.array(z.object({ label: z.string(), value: z.string() })),
    sections: z.array(z.object({ id: z.string(), label: z.string() })),
    next: z.string(),
    ogImage: z.string(),
    description: z.string(),
  }),
});

export const collections = { projects };
