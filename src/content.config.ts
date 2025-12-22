import { glob, file } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      order: z.number().optional(),
      image: image().optional(),
      tags: z.array(z.string()).optional(),
      people: z.array(z.string()).optional(),
    }),
})

const people = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    avatar: z.string().url().or(z.string().startsWith('/')).optional(),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    scholar: z.string().url().optional(),
    isPastMember: z.boolean().optional(),
  }),
})

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      people: z.array(z.string()),
      publication: z
        .object({
          venue: z.string(),
          link: z.string().url(),
        })
        .optional(),
      image: image().optional(),
      startDate: z.coerce.date().optional(),
      endDate: z.coerce.date().optional(),
    }),
})

const publications = defineCollection({
  loader: file('src/content/publications/content.yaml'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      authors: z.array(z.string()),
      journal: z.string(),
      link: z.string().url(),
      project: z.string().optional(),
      annotation: z.string().optional(),
      image: image().optional(),
    }),
})

export const collections = { blog, people, projects, publications }
