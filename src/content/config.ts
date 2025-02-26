import { defineCollection, z } from 'astro:content';

const work = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		publishDate: z.coerce.date(),
		startDate: z.coerce.date().optional(),
		endDate: z.string().optional(),
		tags: z.array(z.string()).optional(),
		img: z.string().optional(),
		img_alt: z.string().optional(),
	}),
});

export const collections = { work };
