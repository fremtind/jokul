import { defineField, defineType } from "sanity";
import { ComponentFolderInput } from "../components/ComponentFolderInput";

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
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "title",
            title: "Sidetittel",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "lede",
            title: "Ingress",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "content",
            title: "Innhold",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "component_folder",
            title: "Komponentmappe",
            type: "string",
            components: {
                input: ComponentFolderInput,
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
});
