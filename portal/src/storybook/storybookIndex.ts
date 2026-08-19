import * as z from "zod";

export const storybookEntrySchema = z.object({
    type: z.string().optional(),
    id: z.string(),
    name: z.string(),
    title: z.string(),
});

export const storybookIndexSchema = z.object({
    entries: z.record(z.string(), storybookEntrySchema),
});

export type StorybookEntry = z.infer<typeof storybookEntrySchema>;
export type StorybookIndex = z.infer<typeof storybookIndexSchema>;
