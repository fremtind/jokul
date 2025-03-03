import { defineType, defineField } from "sanity";
import { ComponentFolderInput } from "@/sanity/components/ComponentFolderInput";

export const componentProps = defineType({
    name: "jokul_componentProps",
    title: "Komponent Props",
    type: "object",
    fields: [
        defineField({
            name: "componentFolder",
            title: "Komponentmappe",
            type: "string",
            components: {
                input: ComponentFolderInput,
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
});
