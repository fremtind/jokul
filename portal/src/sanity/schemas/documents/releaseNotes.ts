import { RocketIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const releaseNotes = defineType({
    name: "jokul_release_notes",
    title: "Release notes",
    type: "document",
    icon: RocketIcon,
    groups: [
        { name: "generelt", title: "Generelt", default: true },
        { name: "innhold", title: "Innhold" },
        { name: "ressurser", title: "Ressurser" },
    ],
    fields: [
        defineField({
            name: "version",
            title: "Versjon",
            description: "Versjonsnummer, f.eks. 5.0.0",
            type: "string",
            group: "generelt",
            validation: (Rule) =>
                Rule.required().custom((value) => {
                    if (typeof value !== "string") return true;
                    if (/[\u200B-\u200D\uFEFF]/.test(value)) {
                        return "Versjonsnummeret inneholder usynlige tegn. Skriv det inn på nytt.";
                    }
                    if (value !== value.trim()) {
                        return "Versjonsnummeret kan ikke starte eller slutte med mellomrom.";
                    }
                    return true;
                }),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            group: "generelt",
            options: {
                source: "version",
                slugify: (input) =>
                    input
                        .replace(/[\u200B-\u200D\uFEFF]/g, "")
                        .trim()
                        .toLowerCase()
                        .replace(/\./g, "-"),
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "releaseDate",
            title: "Utgivelsesdato",
            type: "date",
            group: "generelt",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "short_description",
            title: "Kort beskrivelse",
            type: "text",
            rows: 2,
            group: "generelt",
        }),
        defineField({
            name: "article",
            title: "Artikkel",
            type: "array",
            group: "innhold",
            of: [
                { type: "block" },
                { type: "jokul_linkCard" },
                { type: "image" },
                { type: "jokul_code" },
                { type: "jokul_codeBlock" },
                { type: "jokul_examples" },
                { type: "jokul_storybook" },
                { type: "jokul_table" },
                { type: "jokul_qa" },
            ],
        }),
        defineField({
            name: "migrationUrl",
            title: "Migrasjonsguide (GitHub)",
            type: "url",
            group: "ressurser",
            initialValue:
                "https://github.com/fremtind/jokul/blob/main/packages/jokul/MIGRATION.md",
        }),
        defineField({
            name: "figmaUrl",
            title: "Endringer i Figma",
            type: "url",
            group: "ressurser",
            initialValue:
                "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv/J%C3%B8kul-4.1?node-id=31238-4543",
        }),
    ],
    preview: {
        select: {
            title: "version",
            subtitle: "releaseDate",
        },
    },
});
