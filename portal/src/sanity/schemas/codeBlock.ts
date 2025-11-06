import { defineField, defineType } from "sanity";

export const codeBlock = defineType({
    name: "jokul_codeBlock",
    title: "Kodeblokk",
    type: "object",
    fields: [
        defineField({
            name: "language",
            title: "Språk",
            type: "string",
            description: "For eksempel Scss, TypeScript eller HTML.",
        }),
        defineField({
            name: "code",
            title: "Kode",
            type: "text",
        }),
    ],
});
