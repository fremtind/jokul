import { CollectionConfig } from "payload";
import { CodeExampleField } from "@/fields/code-example";
import { slugField } from "@/fields/slug";

export const ComponentPages: CollectionConfig = {
    slug: "component-page",
    admin: {
        useAsTitle: "title",
    },
    fields: [
        ...slugField(),
        {
            name: "title",
            type: "text",
            label: "Sidetittel",
            required: true,
        },
        {
            name: "lede",
            type: "richText",
            label: "Ingress",
        },
        {
            name: "content",
            type: "richText",
            label: "Innhold",
        },
        CodeExampleField,
    ],
};
