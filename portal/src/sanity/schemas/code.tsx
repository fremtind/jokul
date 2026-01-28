import { CodeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const code = defineType({
    name: "jokul_code",
    title: "Kode",
    type: "object",
    icon: CodeIcon,
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
            language: "code.language",
        },
        prepare({ title, language }) {
            return {
                title,
                media: () => <small>.{language}</small>,
            };
        },
    },
});
