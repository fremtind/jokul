import { CollectionConfig } from "payload";

export const ComponentPages: CollectionConfig = {
    slug: "component-page",
    admin: {
        useAsTitle: "title",
    },
    fields: [
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
    ],
};
