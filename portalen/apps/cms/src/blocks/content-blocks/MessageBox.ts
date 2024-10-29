import { Block } from "payload/types";

export const MessageBox: Block = {
    slug: "message-box",
    imageURL: "/media/mediamessagebox.webp",
    fields: [
        {
            name: "boxes",
            labels: {
                singular: "Meldingsboks",
                plural: "Meldingsbokser",
            },
            type: "array",
            fields: [
                {
                    type: "row",
                    fields: [
                        {
                            name: "type",
                            label: "Type",
                            type: "select",
                            required: true,
                            hasMany: false,
                            options: [
                                {
                                    label: "Info",
                                    value: "info",
                                },
                                {
                                    label: "Success",
                                    value: "success",
                                },
                                {
                                    label: "Error",
                                    value: "error",
                                },
                                {
                                    label: "Warning",
                                    value: "warning",
                                },
                            ],
                        },
                        {
                            name: "title",
                            label: "Tittel",
                            type: "text",
                            required: false,
                        },
                        {
                            name: "description",
                            label: "Beskrivelse",
                            type: "text",
                            required: true,
                        },
                    ],
                },
            ],
        },
    ],
};
