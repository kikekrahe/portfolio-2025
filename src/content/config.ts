import { defineCollection, z } from 'astro:content';

const imageSchema = z.union([
    z.string(),
    z.object({
        type: z.string().transform((val) => val.toLowerCase()).refine((val) => ["image", "video"].includes(val), {message: "type must be 'image' or 'video'"}).optional(),
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
        mediaItems: z.array(imageSchema).optional(),
    }),
});

export const collections = {
    projects: projectsCollection,
};