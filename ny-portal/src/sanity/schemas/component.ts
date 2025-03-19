import { defineField, defineType } from "sanity";

const MAX_LENGTH = 70;

export const component = defineType({
    name: "jokul_component",
    title: "Komponent",
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
            name: "name",
            title: "Navn",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "short_description",
            title: "Kort beskrivelse",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "documentation_article",
            title: "Dokumentasjon",
            type: "array",
            of: [
                { type: "block" },
                { type: "image" },
                { type: "jokul_componentProps" },
                { type: "jokul_codeExample" },
                { type: "jokul_storybook" },
            ],
        }),
    ],
});
