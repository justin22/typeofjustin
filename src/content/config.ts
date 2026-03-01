import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    position: z.number(),
    published: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const interviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    position: z.number(),
    published: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = {
  posts,
  interviews,
};
