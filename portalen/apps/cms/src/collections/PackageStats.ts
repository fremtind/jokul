import { CollectionConfig } from "payload/types";

export const PackageStats: CollectionConfig = {
    slug: "package-stats",
    admin: {
        hidden: true,
    },
    fields: [
        { type: "text", name: "title" },
        { type: "text", name: "package" },
        { type: "number", name: "downloads", index: true },
        { type: "text", name: "componentId" },
    ],
};
