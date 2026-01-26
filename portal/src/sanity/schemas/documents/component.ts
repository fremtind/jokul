import {
    CheckmarkCircleIcon,
    CloseCircleIcon,
    EarthGlobeIcon,
} from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { componentPageLink } from "../links/componentPageLink";

import "../lists/usageList.scss";
import { COMPONENT_CATEGORIES } from "@/utils/user-preferences";

const MAX_LENGTH = 70;

export const component = defineType({
    name: "jokul_component",
    title: "Komponent",
    type: "document",
    groups: [
        { name: "documentation", title: "Dokumentasjon" },
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
            type: "object",
            group: "metadata",
            fields: [
                defineField({
                    name: "value",
                    title: "Status",
                    type: "string",
                    options: {
                        list: ["deprecated", "alpha", "beta", "stabil"],
                        layout: "dropdown",
                    },
                }),
                defineField({
                    name: "statusDescription",
                    title: "Statusbeskrivelse",
                    type: "text",
                    hidden: ({ parent }) => !parent?.value,
                }),
            ],
        }),
        defineField({
            name: "categories",
            title: "Kategorier",
            type: "array",
            group: "metadata",
            of: [{ type: "string" }],
            options: {
                list: COMPONENT_CATEGORIES,
            },
        }),
        defineField({
            name: "keywords",
            title: "Stikkord",
            type: "array",
            group: "metadata",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
                sortable: true,
            },
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
                    lists: [
                        { title: "Punktliste", value: "bullet" },
                        { title: "Nummerert liste", value: "number" },
                        {
                            title: "Oppfordringsliste",
                            value: "check",
                            icon: CheckmarkCircleIcon,
                        },
                        {
                            title: "Frarådningsliste",
                            value: "cross",
                            icon: CloseCircleIcon,
                        },
                    ],
                    marks: {
                        annotations: [
                            {
                                name: "link",
                                type: "object",
                                title: "Ekstern lenke",
                                icon: EarthGlobeIcon,
                                fields: [
                                    {
                                        name: "href",
                                        type: "url",
                                        title: "URL",
                                    },
                                    {
                                        title: "Åpne i ny fane",
                                        name: "blank",
                                        type: "boolean",
                                        initialValue: false,
                                    },
                                ],
                            },
                            componentPageLink,
                        ],
                    },
                },
                { type: "image" },
                { type: "jokul_componentProps" },
                { type: "jokul_componentKortFortalt" },
                { type: "jokul_codeExample" },
                { type: "jokul_examples" },
                { type: "jokul_storybook" },
                { type: "jokul_codeBlock" },
                { type: "jokul_doAndDont" },
                { type: "jokul_messageBox" },
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
            },
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
