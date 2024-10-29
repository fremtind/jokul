import { Block } from "payload/types";

export const LiveDemoBlock: Block = {
    slug: "live-demo-block",
    labels: {
        singular: "Kodeeksempel",
        plural: "Kodeeksempler",
    },
    imageURL: "/media/mediakodeeksempel.webp",
    fields: [
        {
            type: "relationship",
            name: "codeExample",
            label: "Kodeeksempel",
            relationTo: "codeExample",
            required: true,
        },
        {
            type: "checkbox",
            name: "defaultShowControls",
            defaultValue: true,
            label: "Vis egenskaper for kodeeksemplet",
        },
        {
            type: "checkbox",
            name: "defaultShowEditor",
            defaultValue: false,
            label: "Vis redigerbar kode under eksemplet",
        },
    ],
};
