import { commonBlock } from "@/sanity/schemas/commonBlock";
import { BulbOutlineIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const MAX_LENGTH = 70;

export const monster = defineType({
    name: "jokul_monster",
    title: "Mønster",
    type: "document",
    icon: BulbOutlineIcon,
    groups: [
        { name: "basics", title: "Grunnleggende info", default: true },
        { name: "related", title: "Relatert innhold" },
    ],
    fields: [
        defineField({
            name: "name",
            title: "Navn",
            group: "basics",
            type: "string",
            description:
                "Formuler gjerne som en oppgave, f.eks. «Hvordan vise datoer i ulike tilfeller»",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            group: "basics",
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
            title: "Beskrivelse",
            group: "basics",
            type: "text",
            rows: 2,
            description:
                "Vises på kort/oversiktssiden. Beskriv kort hvilken oppgave mønsteret løser.",
            validation: (Rule) =>
                Rule.required()
                    .max(160)
                    .warning(
                        "Beskrivelsen vises på kortet i oversikten — hold den kort.",
                    ),
        }),
        defineField({
            name: "image",
            title: "Bilde",
            group: "basics",
            type: "image",
            description:
                "Vises foreløpig kun som forhåndsvisning i oversikten.",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "article",
            title: "Artikkel",
            group: "basics",
            type: "array",
            description: "Selve innholdet i mønsteret.",
            of: [
                ...commonBlock,
                { type: "jokul_code" },
                { type: "jokul_examples" },
                { type: "jokul_doAndDont" },
                { type: "jokul_messageBox" },
                { type: "jokul_table" },
                { type: "jokul_qa" },
            ],
        }),
        defineField({
            name: "related_components",
            title: "Relevante komponenter",
            group: "related",
            type: "array",
            description: "Komponentene som er relevante for dette mønsteret.",
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
            name: "related_patterns",
            title: "Relaterte mønstre",
            group: "related",
            type: "array",
            of: [
                defineField({
                    type: "reference",
                    name: "pattern",
                    to: [{ type: "jokul_monster" }],
                    options: {
                        disableNew: true,
                        filter: ({ document }) => {
                            const id = document._id.replace(/^drafts\./, "");
                            return {
                                filter: "_id != $id && _id != $draftId",
                                params: { id, draftId: `drafts.${id}` },
                            };
                        },
                    },
                }),
            ],
        }),
    ],
    orderings: [
        {
            title: "Navn A–Å",
            name: "nameAsc",
            by: [{ field: "name", direction: "asc" }],
        },
        {
            title: "Sist endret",
            name: "updatedDesc",
            by: [{ field: "_updatedAt", direction: "desc" }],
        },
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "short_description",
            media: "image",
            components: "related_components",
        },
        prepare({ title, subtitle, media, components }) {
            const count = Array.isArray(components) ? components.length : 0;
            return {
                title: title || "Uten navn",
                subtitle:
                    subtitle ||
                    (count
                        ? `${count} relatert${count === 1 ? " komponent" : "e komponenter"}`
                        : undefined),
                media: media || BulbOutlineIcon,
            };
        },
    },
});
