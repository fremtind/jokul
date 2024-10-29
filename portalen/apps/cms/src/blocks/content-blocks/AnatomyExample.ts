import type { Block } from "payload/types";

export const AnatomyExample: Block = {
    slug: "anatomy-example",
    labels: {
        singular: "Anatomieksempel",
        plural: "Anatomieksempler",
    },
    fields: [
        {
            type: "array",
            name: "steps",
            label: "Steg",
            minRows: 1,
            labels: {
                plural: "Steg",
                singular: "Steg",
            },
            fields: [
                {
                    type: "row",
                    fields: [
                        {
                            name: "title",
                            label: "Tittel",
                            type: "text",
                            required: true,
                            admin: {
                                width: "100%",
                            },
                        },
                        {
                            name: "description",
                            label: "Beskrivelse",
                            type: "text",
                            required: true,
                            admin: {
                                width: "100%",
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "text",
            name: "url",
            label: "Figma-lenke lyst tema",
            required: true,
            admin: {
                description:
                    'Du finner denne lenken ved å trykke "Share" i Figma. Husk å krysse av for "Link to selected frame"',
            },
        },
        {
            type: "text",
            name: "urlDark",
            label: "Figma-lenke mørkt tema",
            required: true,
            admin: {
                description: "Bruk samme lenke som lyst tema hvis du ikke har noe for mørkt tema",
            },
        },
    ],
};
