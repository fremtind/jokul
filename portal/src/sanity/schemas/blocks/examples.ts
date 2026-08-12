import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const examples = defineType({
    name: "jokul_examples",
    title: "Storybook-eksempler",
    type: "object",
    icon: BookIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            hidden: ({ value }) => !value || value.length === 0,
            deprecated: {
                reason: "Bruk riktekst til å skrive tekst over eksemplene i stedet for å bruke tittel her.",
            },
        }),
        defineField({
            name: "examples",
            title: "Stories",
            type: "array",
            validation: (Rule) => Rule.unique(),
            of: [
                {
                    type: "reference",
                    name: "jokul_story",
                    to: [{ type: "jokul_story" }],
                },
            ],
        }),
        defineField({
            name: "layout",
            title: "Velg visning",
            type: "string",
            hidden: true,
            options: {
                list: [
                    { title: "Galleri", value: "gallery" },
                    { title: "Karusell", value: "carousel" },
                    { title: "Liste", value: "list" },
                ],
            },
            initialValue: "list",
        }),
    ],
    preview: {
        select: {
            example1: "examples.0.name",
            example2: "examples.1.name",
            example3: "examples.2.name",
            example4: "examples.3.name",
        },
        prepare({ example1, example2, example3, example4 }) {
            const examples = [example1, example2, example3, example4].filter(
                Boolean,
            );
            const count = examples.length ? examples.length : "Ingen";
            const exampleTitles = examples.map((example) => example).join(", ");

            return {
                title: `${count} eksempler`,
                subtitle: exampleTitles,
            };
        },
    },
});
