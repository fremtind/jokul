import { defineField, defineType } from "sanity";

const MAX_LENGTH = 70;

export const componentPage = defineType({
    name: "jokul_componentPage",
    title: "Komponentside",
    type: "document",
    fields: [
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: MAX_LENGTH,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "title",
            title: "Sidetittel",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "lede",
            title: "Ingress",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "content",
            title: "Innhold",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
});
