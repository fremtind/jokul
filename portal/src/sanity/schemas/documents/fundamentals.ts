import { defineField, defineType } from "sanity";

const MAX_LENGTH = 70;

export const fundamentals = defineType({
    name: "jokul_fundamentals",
    title: "Fundamenter",
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
                    input
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .slice(0, MAX_LENGTH),
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
            name: "article",
            title: "Artikkel",
            type: "array",
            of: [
                { type: "block" },
                { type: "jokul_linkCard" },
                { type: "image" },
                { type: "jokul_code" },
                { type: "jokul_codeBlock" },
                { type: "jokul_examples" },
                { type: "jokul_storybook" },
                { type: "jokul_doAndDont" },
                { type: "jokul_table" },
                { type: "jokul_qa" },
            ],
        }),
    ],
});
