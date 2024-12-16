import { GlobalConfig } from "payload/types";
import { authenticatedContributors } from "../access";

export const MainMenu: GlobalConfig = {
    slug: "main-menu",
    label: "Hovedmeny",
    access: {
        read: () => true,
        update: authenticatedContributors,
    },
    admin: {
        group: "Hovedmeny",
    },
    fields: [
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
