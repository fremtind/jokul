import { defineField, defineType } from "sanity";

export const componentCard = defineType({
    name: "jokul_componentCard",
    title: "Komponent-kort",
    type: "object",
    fields: [
        defineField({
            name: "components",
            title: "Komponenter",
            type: "array",
            of: [
                {
                    type: "reference",
                    name: "component",
                    to: [{ type: "jokul_component" }],
                },
            ],
        }),
    ],
    preview: {
        select: {
            first: "components.0.name",
            count: "components.length",
        },
        prepare({ first, count }) {
            return {
                title:
                    count > 1
                        ? `Komponentkort (${count} komponenter)`
                        : `Komponentkort: ${first || "Ukjent"}`,
            };
        },
    },
});
