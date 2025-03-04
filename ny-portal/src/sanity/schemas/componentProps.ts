import { defineType, defineField } from "sanity";
import { ComponentFolderInput } from "@/sanity/components/ComponentFolderInput";

export const componentProps = defineType({
    name: "jokul_component-props",
    title: "Komponent Props",
    type: "object",
    fields: [
        defineField({
            name: "component_folder",
            title: "Komponentmappe",
            type: "string",
            components: {
                input: ComponentFolderInput,
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
});
