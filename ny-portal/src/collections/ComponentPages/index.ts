import { BlocksFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload";
import CodeExampleBlock from "@/blocks/CodeExampleBlock";
import { ComponentFolderField } from "@/fields/component-folder";
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
            editor: lexicalEditor({
                features({ defaultFeatures, rootFeatures }) {
                    return [
                        ...defaultFeatures,
                        ...rootFeatures,
                        BlocksFeature({ blocks: [CodeExampleBlock] }),
                    ];
                },
            }),
        },
        ComponentFolderField("sidebar"),
    ],
};
