import { defineField, defineType } from "sanity";

export const colorSchemeImages = defineType({
    name: "colorSchemeImages",
    title: "Bilder for lys og mørk modus",
    type: "object",
    fields: [
        defineField({
            name: "light",
            type: "image",
            title: "Lys modus",
            description:
                "Bruk samme motiv og utsnitt som for bildet i mørk modus.",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "dark",
            type: "image",
            title: "Mørk modus",
            description:
                "Bruk samme motiv og utsnitt som for bildet i lys modus.",
            options: {
                hotspot: true,
            },
        }),
    ],
});
