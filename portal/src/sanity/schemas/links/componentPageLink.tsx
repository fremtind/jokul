import { ComponentIcon } from "@sanity/icons";
import { defineField } from "sanity";

export const componentPageLink = defineField({
    type: "object",
    name: "componentPageLink",
    title: "Lenke til komponentside",
    icon: ComponentIcon,
    fields: [
        {
            type: "reference",
            name: "component",
            title: "Komponent",
            description:
                "Lager en lenke til komponentsiden til en komponent i designsystemet.",
            to: [{ type: "jokul_component" }],
            validation: (Rule) => Rule.required(),
        },
    ],
});
