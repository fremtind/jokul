import { CollectionConfig } from "payload/types";
import { authenticatedAdmins, authenticatedContributors } from "../access";

export const BlogTags: CollectionConfig = {
    slug: "blog-tag",
    labels: {
        singular: "Tag",
        plural: "Tags",
    },
    access: {
        read: () => true,
        create: authenticatedContributors,
        update: authenticatedContributors,
        delete: authenticatedAdmins,
    },
    admin: {
        group: "Annet innhold",
        useAsTitle: "label",
    },
    fields: [
        {
            name: "label",
            type: "text",
            required: true,
        },
        {
            name: "type",
            type: "select",
            options: ["success", "warning", "info", "error"],
            admin: {
                description:
                    "Styrer farge på tag. Om du ikke velger noe får du standard grå",
            },
        },
    ],
};
