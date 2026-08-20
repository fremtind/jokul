import { richText } from "@/sanity/schemas/blocks/richText";
import { CommentIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const messageBox = defineType({
    name: "jokul_messageBox",
    title: "Melding",
    type: "object",
    icon: CommentIcon,
    fields: [
        {
            title: "Meldingstype",
            name: "messageType",
            type: "string",
            options: {
                list: ["info", "warning", "success", "error"],
                layout: "select",
            },
            initialValue: "info",
        },
        {
            title: "Tittel",
            name: "title",
            type: "string",
        },
        {
            title: "Melding",
            name: "message",
            type: "array",
            of: [richText],
        },
    ],
    preview: {
        select: {
            title: "title",
            messageType: "messageType",
        },
        prepare({ title, messageType }) {
            return {
                title: title || "Uten tittel",
                subtitle: messageType,
            };
        },
    },
});
