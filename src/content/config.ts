import { defineCollection, z } from 'astro:content';

const imageSchema = z.union([
    z.string(),
    z.object({
        type: z.string(),
        src: z.string(),
        caption: z.string().optional(),
    }),
]);

const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        categories: z.string().optional(),
        year: z.number(),
        images: z.array(imageSchema),
    }),
});

export const collections = {
    projects: projectsCollection,
};