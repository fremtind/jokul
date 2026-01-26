import { StorySelector } from "@/sanity/components/StorySelector";
import { BlockElementIcon } from "@sanity/icons";
import React from "react";
import { defineField, defineType } from "sanity";

export const story = defineType({
    name: "jokul_story",
    title: "Story",
    type: "document",
    icon: BlockElementIcon,
    fields: [
        defineField({
            name: "id",
            title: "Story",
            type: "string",
            components: {
                input: StorySelector,
            },
        }),
        defineField({
            name: "title",
            title: "Tittel",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Beskrivelse",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "height",
            title: "Høyde på eksempel (px)",
            description:
                "Valgfri høyde på Storybook-eksempelet. Bruk lavere verdi for små eksempler.",
            type: "number",
            options: {
                list: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
            },
            initialValue: 400,
        }),
        defineField({
            name: "inert",
            title: "Skru av interaksjon",
            type: "boolean",
            description:
                "Fjerner mulighet for å kunne trykke, sveipe eller gjøre handlinger i eksempelet.",
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            id: "id",
            title: "title",
            description: "description",
            height: "height",
            inert: "inert",
        },
        prepare({ title, description, height }) {
            const desc = description ? description : "Ingen beskrivelse";

            return {
                title: title ? title : "Story",
                subtitle: `${height}px: ${desc}`,
                media: <p>{title.charAt(0)}</p>,
            };
        },
    },
});
