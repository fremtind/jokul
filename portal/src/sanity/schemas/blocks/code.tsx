import { TerminalIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const code = defineType({
    name: "jokul_code",
    title: "Kode",
    type: "object",
    icon: TerminalIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Tittel",
        }),
        defineField({
            name: "code",
            title: "Kode",
            type: "code",
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                title,
            };
        },
    },
});
