import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Eazy.Family Team'),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'de', 'fr', 'it']).default('en'),
  }),
});

export const collections = { blog };
