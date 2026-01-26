import { defineField, defineType } from "sanity";

const MAX_LENGTH = 70;

export const blogPost = defineType({
    name: "jokul_blog_post",
    title: "Bloggartikkel",
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
            name: "category",
            title: "Kategori",
            type: "string",
            options: {
                list: [
                    "Release notes",
                    "Blogg",
                    "Kom i gang",
                    "Referat",
                ].sort(),
            },
        }),
        defineField({
            name: "article",
            title: "Artikkel",
            type: "array",
            of: [
                { type: "block" },
                { type: "jokul_linkCard" },
                { type: "image" },
                { type: "jokul_codeBlock" },
                { type: "jokul_examples" },
                { type: "jokul_storybook" },
                { type: "jokul_table" },
                { type: "jokul_qa" },
            ],
        }),
    ],
});
