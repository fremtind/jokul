import { defineField, defineType } from "sanity";

const MAX_LENGTH = 70;

export const component = defineType({
    name: "jokul_component",
    title: "Komponent",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Navn",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: MAX_LENGTH,
                slugify: (input) =>
                    input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "short_description",
            title: "Kort beskrivelse",
            type: "text",
            rows: 2,
        }),
        defineField({
            type: "object",
            name: "external_links",
            fieldsets: [
                { name: "external_links", title: "Ekstern dokumentasjon" },
            ],
            fields: [
                {
                    name: "github_link",
                    title: "GitHub",
                    type: "url",
                },
                {
                    name: "figma_link",
                    title: "Figma",
                    type: "url",
                },
                {
                    name: "storybook_link",
                    title: "Storybook",
                    type: "url",
                },
            ],
            options: {
                collapsible: true,
                columns: 2,
            },
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Bilde",
            options: {
                hotspot: true,
            },
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
