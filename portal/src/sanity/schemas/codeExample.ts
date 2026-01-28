import { defineField, defineType } from "sanity";
import { CodeExampleInput } from "../components/CodeExampleInput";

export const codeExample = defineType({
    name: "jokul_codeExample",
    title: "Kodeeksempel",
    type: "object",
    deprecated: {
        reason: "Bruk den nye blokken",
    },
    fields: [
        defineField({
            name: "showEditor",
            title: "Vis Editor",
            type: "boolean",
            initialValue: true,
        }),
        defineField({
            name: "codeExample",
            title: "Velg kodeeksempel",
            type: "string",
            components: {
                input: CodeExampleInput,
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
});
