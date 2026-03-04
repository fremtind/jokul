import { InlineElementIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
export const examples = defineType({
    name: "jokul_examples",
    title: "Eksempler",
    type: "object",
    icon: InlineElementIcon,
    groups: [
        { name: "content", title: "Innhold", default: true },
        { name: "options", title: "Valg" },
    ],
    fields: [
        defineField({
            name: "title",
            type: "string",
            group: "content",
            description:
                "Rendres som h2 i UI'et og vil dukke opp i innholdsfortegnelsen hvis den fylles ut.",
        }),
        defineField({
            name: "examples",
            title: "Eksempler",
            group: "content",
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
            options: {
                list: [
                    { title: "Galleri", value: "gallery" },
                    { title: "Karusell", value: "carousel" },
                    { title: "Liste", value: "list" },
                ],
            },
            initialValue: "list",
            group: "options",
        }),
    ],
    preview: {
        select: {
            title: "title",
            example1: "examples.0.name",
            example2: "examples.1.name",
            example3: "examples.2.name",
            example4: "examples.3.name",
        },
        prepare({ title, example1, example2, example3, example4 }) {
            const examples = [example1, example2, example3, example4].filter(
                Boolean,
            );
            const count = examples ? examples.length : "Ingen";
            const exampleTitles = examples.map((example) => example).join(", ");

            return {
                title: `${title} (${count}) `,
                subtitle: exampleTitles,
            };
        },
    },
});
