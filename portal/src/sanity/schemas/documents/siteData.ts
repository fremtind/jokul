import { seoFields } from "@/sanity/schemas/fields";
import { defineField, defineType } from "sanity";

export const siteData = defineType({
    name: "jokul_siteData",
    title: "Nettstedsinformasjon",
    type: "document",
    icon: () => "🌐",
    fields: [
        defineField({
            type: "string",
            name: "title",
            title: "Tittel",
        }),
        defineField({
            type: "string",
            name: "description",
            title: "Beskrivelse",
        }),
        defineField({
            type: "image",
            name: "favicon",
            title: "Favicon",
        }),
        seoFields,
        defineField({
            type: "object",
            name: "footer",
            fields: [
                defineField({
                    type: "array",
                    name: "linkGroups",
                    title: "Lenkegrupper",
                    of: [
                        defineField({
                            type: "object",
                            name: "linkGroup",
                            title: "Lenkegruppe",
                            fields: [
                                defineField({
                                    type: "string",
                                    name: "title",
                                    title: "Tittel",
                                }),
                                defineField({
                                    type: "array",
                                    name: "linkList",
                                    of: [
                                        defineField({
                                            type: "object",
                                            name: "pageLink",
                                            title: "Lenke",
                                            fields: [
                                                defineField({
                                                    name: "text",
                                                    type: "string",
                                                    title: "Tekst",
                                                }),
                                                defineField({
                                                    name: "url",
                                                    type: "array",
                                                    title: "Lenke",
                                                    validation: (rule) =>
                                                        rule.max(1).required(),
                                                    of: [
                                                        {
                                                            name: "internalLink",
                                                            type: "object",
                                                            title: "Internal Link",
                                                            fields: [
                                                                {
                                                                    name: "internalReference",
                                                                    type: "reference",
                                                                    title: "Side",
                                                                    to: [
                                                                        {
                                                                            type: "jokul_component",
                                                                        },
                                                                        {
                                                                            type: "jokul_fundamentals",
                                                                        },
                                                                        {
                                                                            type: "jokul_blog_post",
                                                                        },
                                                                        {
                                                                            type: "jokul_release_notes",
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                            preview: {
                                                                select: {
                                                                    title: "internalReference.name",
                                                                },
                                                            },
                                                        },
                                                        {
                                                            name: "externalLink",
                                                            type: "object",
                                                            title: "External Link",
                                                            fields: [
                                                                {
                                                                    name: "url",
                                                                    type: "url",
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                            preview: {
                                select: {
                                    title: "title",
                                    links: "linkList",
                                },
                                prepare({ title, links }) {
                                    return {
                                        title,
                                        subtitle: `${links?.length || 0} lenker`,
                                    };
                                },
                            },
                        }),
                    ],
                }),
                defineField({
                    type: "string",
                    name: "text",
                    title: "Avsluttende setning",
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: "title",
            lead: "lead",
            icon: "favicon",
        },
        prepare({ title, lead, icon }) {
            return {
                title,
                subtitle: lead,
                media: icon,
            };
        },
    },
});
