import { GlobalConfig } from "payload/types";
import { allContentBlocks } from "../blocks/content-blocks";
import { Link } from "../blocks/Link";
import { allPageSectionBlocks } from "../blocks/page-sections";

export const AllContentBlocks: GlobalConfig = {
    slug: "all-content",
    label: "Alle blokker",
    admin: {
        group: "Admin",
        hidden: true,
    },
    fields: [
        {
            name: "blocks",
            type: "blocks",
            blocks: [...allPageSectionBlocks, ...allContentBlocks, Link],
            required: true,
        },
    ],
};
