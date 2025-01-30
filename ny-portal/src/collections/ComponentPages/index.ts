import { CollectionBeforeReadHook, CollectionConfig } from "payload";
import { CodeExampleField } from "@/fields/code-example";

export const ComponentPages: CollectionConfig = {
    slug: "component-page",
    admin: {
        useAsTitle: "title",
    },
    fields: [
        {
            name: "slug",
            type: "text",
            label: "URL-segment",
            required: true,
        },
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
