import { defineField, defineType } from "sanity";

export const messageBox = defineType({
    name: "jokul_messageBox",
    title: "Melding",
    type: "object",
    fields: [
        {
            title: "Meldingstype",
            name: "messageType",
            type: "string",
            options: {
                list: [
                    { title: "Info", value: "info" },
                    { title: "Warning", value: "warning" },
                    { title: "Success", value: "success" },
                    { title: "Error", value: "error" },
                ],
                layout: "radio",
            },
        },
        {
            title: "Tittel",
            name: "title",
            type: "string",
        },
        {
            title: "Melding",
            name: "message",
            type: "string",
        },
    ],
});
