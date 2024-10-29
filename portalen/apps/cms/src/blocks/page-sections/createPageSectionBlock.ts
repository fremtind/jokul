import { slateEditor } from "@payloadcms/richtext-slate";
import { Block } from "payload/types";

type PageSectionCreatorOptions = Block & { defaultHeading?: string };

export function createPageSectionBlock({ fields, defaultHeading, ...rest }: PageSectionCreatorOptions): Block {
    return {
        fields: [
            {
                type: "text",
                name: "title",
                label: "Overskrift",
                required: true,
                defaultValue: defaultHeading,
            },
            {
                type: "collapsible",
                label: "Ingress (ikke påkrevd)",
                admin: {
                    initCollapsed: true,
                },
                fields: [
                    {
                        type: "richText",
                        name: "ingress",
                        label: "Ingress",
                        required: false,
                        editor: slateEditor({
                            admin: {
                                elements: ["link"],
                            },
                        }),
                    },
                ],
            },
            ...fields,
        ],
        ...rest,
    };
}
