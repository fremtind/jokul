import { defineField } from "sanity";

export const seoFields = defineField({
    name: "seo",
    title: "SEO",
    type: "object",
    options: {
        collapsed: true,
    },
    fields: [
        defineField({
            type: "image",
            name: "ogImage",
            title: "Open Graph-bilde",
        }),
        defineField({
            type: "boolean",
            name: "noIndex",
            title: "No index",
            description: "Skal siden ikke indekseres av søkemotorer",
            initialValue: false,
        }),
    ],
});
