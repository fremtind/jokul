import { defineField, defineType } from "sanity";

export const codeBlock = defineType({
    name: "jokul_codeBlock",
    title: "Kodeblokk",
    type: "object",
    fields: [
        defineField({
            name: "code",
            title: "Kode",
            type: "text",
        }),
        defineField({
            name: "language",
            title: "Språk",
            type: "string",
            options: {
                list: ["scss", "typescript"],
            },
            initialValue: "typescript",
        }),
    ],
});
