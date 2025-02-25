import { defineField, defineType } from "sanity";

const MAX_LENGTH = 70;

export const componentPage = defineType({
    name: "jokul_componentPage",
    title: "Komponentside",
    type: "document",
    fields: [
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: MAX_LENGTH,
            },
            validation: (rule) =>
                rule.custom((value) => {
                    if (!value?.current) {
                        return true;
                    }
                    if (value.current.length > MAX_LENGTH) {
                        return `Max ${MAX_LENGTH} tegn`;
                    }
                    if (!value.current.match(/^[a-z0-9-]+$/)) {
                        return "Kan bare inneholde lowercase tegn og bindestreker, og ikke æ, ø eller å";
                    }
                    return true;
                }),
        }),
        {
            name: "title",
            title: "Sidetittel",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "lede",
            title: "Ingress",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "content",
            title: "Innhold",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
});
