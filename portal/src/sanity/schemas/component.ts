import { defineField, defineType } from "sanity";
import { componentPageLink } from "./links/componentPageLink";

const MAX_LENGTH = 70;

export const component = defineType({
    name: "jokul_component",
    title: "Komponent",
    type: "document",
    groups: [
        { name: "documentation", title: "Dokumentasjon", default: true },
        { name: "metadata", title: "Metadata" },
        { name: "images", title: "Bilder" },
    ],
    fields: [
        defineField({
            name: "name",
            title: "Navn",
            type: "string",
            group: "documentation",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            group: "metadata",
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
            rows: 3,
            group: "documentation",
        }),
        defineField({
            name: "status",
            title: "Status",
            type: "array",
            group: "metadata",
            options: {
                list: ["deprecated", "alpha", "beta", "stabil"],
            },
            of: [{ type: "string" }],
        }),
        defineField({
            name: "keywords",
            title: "Stikkord",
            type: "array",
            group: "metadata",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "example_card",
            title: "Eksempel",
            type: "image",
            group: "documentation",
        }),
        defineField({
            name: "considerations",
            title: "Ting å tenke på",
            group: "documentation",
            type: "array",
            validation: (Rule) => Rule.max(3),
            of: [
                defineField({
                    name: "consideration",
                    title: "Ting å tenke på",
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            title: "Tittel",
                            type: "string",
                        },
                        {
                            name: "description",
                            title: "Beskrivelse",
                            type: "string",
                        },
                    ],
                    preview: {
                        select: {
                            title: "title",
                            description: "description",
                        },
                        prepare({ title, description }) {
                            return {
                                title: title,
                                subtitle: description,
                            };
                        },
                    },
                }),
            ],
        }),
        defineField({
            name: "documentation_article",
            title: "Dokumentasjon",
            type: "array",
            group: "documentation",
            of: [
                {
                    type: "block",
                    marks: {
                        annotations: [componentPageLink],
                    },
                },
                { type: "image" },
                { type: "jokul_componentProps" },
                { type: "jokul_componentKortFortalt" },
                { type: "jokul_codeExample" },
                { type: "jokul_storybook" },
                { type: "jokul_codeBlock" },
            ],
        }),
        defineField({
            name: "related_components",
            title: "Relaterte komponenter",
            type: "object",
            group: "documentation",
            fields: [
                defineField({
                    name: "components",
                    title: "Komponenter",
                    type: "array",
                    of: [
                        {
                            type: "reference",
                            name: "component",
                            to: [{ type: "jokul_component" }],
                        },
                    ],
                }),
            ],
        }),
        defineField({
            type: "object",
            name: "external_links",
            title: "Eksterne lenker",
            group: "metadata",
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
            type: "object",
            name: "figma_image",
            title: "Illustrasjon fra Figma",
            group: "images",
            hidden: true,
            fields: [
                defineField({
                    type: "string",
                    name: "light_mode",
                    title: "Lys modus",
                    description:
                        "Lenke til frame i Figma for illustrasjon i lys modus",
                    // Endre tilbake når importen fra Figma fungerer
                    // validation: (Rule) => Rule.required(),
                }),
                defineField({
                    type: "string",
                    name: "dark_mode",
                    title: "Mørk modus",
                    description:
                        "Lenke til frame i Figma for illustrasjon i mørk modus",
                    // Endre tilbake når importen fra Figma fungerer
                    // validation: (Rule) => Rule.required(),
                }),
            ],
            // Endre tilbake når importen fra Figma fungerer
            // validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Bilde til light mode",
            options: {
                hotspot: true,
            },
            group: "images",
        }),
        defineField({
            name: "imageDark",
            type: "image",
            title: "Bilde til dark mode",
            options: {
                hotspot: true,
            },
            group: "images",
        }),
    ],
});
