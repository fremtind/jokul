import { Block, FieldHook } from "payload/types";
import { PackageStat } from "../../types";

const fetchContent: FieldHook = async ({ req }) => {
    return (
        await req.payload.find({
            collection: "package-stats",
            sort: "-downloads",
            limit: 4,
        })
    ).docs.map(async (packageStat: Partial<PackageStat>) => {
        const component = await req.payload.findByID({
            collection: "components",
            id: packageStat.componentId || 0,
        });

        return {
            package: packageStat.package,
            downloads: packageStat.downloads,
            title: packageStat.title,
            ingress: component.ingress,
            componentId: component.id,
        };
    });
};
export const PackageStats: Block = {
    slug: "package-stats-section",
    imageURL: "/media/mediapackagestats.webp",
    fields: [
        {
            admin: { hidden: true },
            type: "array",
            name: "content",
            required: true,
            fields: [
                { type: "text", name: "package" },
                { type: "number", name: "downloads" },
                { type: "text", name: "title" },
                { type: "richText", name: "ingress" },
                { type: "text", name: "componentId" },
            ],
            hooks: {
                beforeValidate: [fetchContent],
                afterRead: [fetchContent],
            },
        },
    ],
};
