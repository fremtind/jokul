import { Block } from "payload/types";

export const TokensTable: Block = {
    slug: "tokens-table",
    fields: [
        {
            name: "rows",
            labels: {
                singular: "Rad",
                plural: "Rader",
            },
            type: "array",
            fields: [
                {
                    type: "row",
                    fields: [
                        {
                            name: "element",
                            label: "Element",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "property",
                            label: "Egenskap",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "role",
                            label: "Rolle",
                            type: "text",
                            required: true,
                        },
                        {
                            name: "value",
                            label: "Verdi",
                            type: "text",
                            required: true,
                        },
                    ],
                },
            ],
        },
    ],
};
