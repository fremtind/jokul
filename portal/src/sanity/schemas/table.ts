import { defineType } from "sanity";

export const table = defineType({
    name: "jokul_table",
    title: "Tabell",
    type: "object",
    fields: [
        {
            name: "head",
            title: "Tabell-header",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "head_row",
                    fields: [
                        {
                            name: "cells",
                            title: "Kolonner",
                            type: "array",
                            of: [{ type: "string" }],
                        },
                    ],
                },
            ],
        },
        {
            name: "body",
            title: "Tabellrader",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "body_row",
                    fields: [
                        {
                            name: "cells",
                            title: "Kolonner",
                            type: "array",
                            of: [{ type: "string" }],
                        },
                    ],
                },
            ],
        },
    ],
    preview: {
        prepare() {
            return { title: "Tabell" };
        },
    },
});
