import { createTopicCollection } from "./topicCreator";

export const Components = createTopicCollection({
    slug: "components",
    customFields: {
        heading: "Pakkeinformasjon",
        fields: [
            {
                name: "type",
                label: "Type komponent",
                type: "select",
                options: ["Komponent", "Hook", "Annet"],
                defaultValue: "Komponent",
                index: true,
            },
            {
                name: "reactPackageName",
                label: "Pakkenavn, React",
                type: "text",
            },
            {
                name: "cssPackageName",
                label: "Pakkenavn, CSS",
                type: "text",
                admin: {
                    description:
                        "Hvis likt som React-pakkenavn, kan feltet stå tomt.",
                },
            },
        ],
    },
    overrides: {
        labels: {
            singular: "Komponent",
            plural: "Komponenter",
        },
    },
});

export default Components;
