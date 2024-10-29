import { slugify } from "@org/shared";
import { CollectionConfig } from "payload/types";
import { authenticatedContributors, authenticatedEditors } from "../access";

export const SubMenus: CollectionConfig = {
    slug: "sub-menus",
    labels: {
        singular: "Undermeny",
        plural: "Undermenyer",
    },
    access: {
        read: () => true,
        create: authenticatedContributors,
        delete: authenticatedEditors,
        update: authenticatedContributors,
    },
    admin: {
        useAsTitle: "title",
        group: "Hovedmeny",
        description:
            "Undermenyer som kan legges til i hovedmenyen. Tips: Det er lettere å opprette undermenyen rett fra hovedmenyen der du skal bruke dem.",
    },
    fields: [
        {
            type: "row",
            fields: [
                {
                    type: "text",
                    name: "title",
                    label: "Tittel",
                    required: true,
                },
                {
                    type: "text",
                    name: "slug",
                    label: "Slug",
                    required: true,
                    admin: {
                        description:
                            "Stien som legges til sider i unermenyen. Fylles automatisk inn fra tittel hvis feltet er tomt.",
                    },
                    // Feltet autoutfylles fra tittel hvis det er tomt,
                    // så vi lar alltid feltet være gyldig selv om det er påkrevd.
                    validate: () => true,
                    hooks: {
                        beforeValidate: [({ value, siblingData }) => value || slugify(siblingData.title)],
                    },
                },
            ],
        },
        {
            type: "array",
            name: "items",
            label: "Menyelementer",
            labels: {
                singular: "Menyelement",
                plural: "Menyelementer",
            },
            fields: [
                {
                    type: "relationship",
                    name: "item",
                    label: "Menypunkt",
                    relationTo: ["menu-items", "sub-menus"],
                    maxDepth: 3,
                    required: true,
                },
            ],
        },
    ],
};
