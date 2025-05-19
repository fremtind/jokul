import { defineField, defineType } from "sanity";

export const linkCard = defineType({
    name: "jokul_linkCard",
    title: "Eksterne lenkekort",
    type: "object",
    fields: [
        defineField({
            type: "array",
            name: "external_links",
            title: "Eksterne lenkekort",
            of: [
                {
                    type: "object",
                    name: "link",
                    title: "Ekstern lenke",
                    fields: [
                        {
                            name: "title",
                            title: "Tittel",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: "description",
                            title: "Beskrivelse",
                            type: "string",
                        },
                        {
                            name: "url",
                            title: "URL",
                            type: "url",
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: "Eksterne lenkekort",
        },
        prepare(selection) {
            return {
                title: "Eksterne lenkekort",
            };
        },
    },
});
