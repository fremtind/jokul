import { defineField, defineType } from "sanity";

const MAX_LENGTH = 70;

export const temaside = defineType({
    name: "jokul_temaside",
    title: "Temaside",
    type: "document",
    groups: [
        { name: "basics", title: "Grunnleggende info" },
        { name: "related", title: "Relatert innhold" },
        { name: "seo", title: "SEO" },
    ],
    fields: [
        defineField({
            name: "tema",
            title: "Tema",
            group: "basics",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            group: "seo",
            type: "slug",
            options: {
                source: "tema",
                maxLength: MAX_LENGTH,
                slugify: (input) =>
                    input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "short_description",
            title: "Kort beskrivelse av tematikken",
            group: "basics",
            type: "text",
            rows: 2,
        }),
        defineField({
            name: "article",
            title: "Artikkel",
            group: "basics",
            type: "array",
            of: [
                { type: "block" },
                { type: "jokul_linkCard" },
                { type: "image" },
                { type: "jokul_codeBlock" },
                { type: "jokul_examples" },
                { type: "jokul_table" },
                { type: "jokul_qa" },
            ],
        }),
        defineField({
            name: "related_components",
            title: "Relevante komponenter",
            type: "array",
            group: "related",
            of: [
                defineField({
                    type: "reference",
                    name: "component",
                    to: [{ type: "jokul_component" }],
                    options: {
                        disableNew: true,
                    },
                }),
            ],
        }),
        defineField({
            name: "related_tema",
            title: "Relaterte temaer",
            type: "array",
            group: "related",
            of: [
                defineField({
                    type: "reference",
                    name: "tema",
                    to: [{ type: "jokul_temaside" }],
                    options: {
                        disableNew: true,
                    },
                }),
            ],
        }),
        defineField({
            name: "resources",
            title: "Eksterne ressurser",
            type: "array",
            group: "related",
            of: [
                defineField({
                    name: "title",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Navn på siden",
                            type: "string",
                        }),
                        defineField({
                            name: "url",
                            type: "url",
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "keywords",
            title: "Stikkord",
            group: "seo",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
            },
        }),
    ],
});
