import { StorybookInput } from "@/sanity/components/StorybookStoryInput";
import { BlockElementIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const storybookStory = defineType({
    name: "jokul_storybookStory",
    title: "Story",
    type: "document",
    icon: BlockElementIcon,
    components: {
        input: StorybookInput,
    },
    fields: [
        defineField({
            name: "storyId",
            title: "Story",
            type: "string",
        }),
        defineField({
            name: "storyName",
            title: "Tittel",
            type: "string",
        }),
        defineField({
            name: "storyDescription",
            title: "Beskrivelse",
            type: "string",
        }),
        defineField({
            name: "height",
            title: "Høyde på eksempel (px)",
            initialValue: 360,
            description:
                "Valgfri høyde på Storybook-eksempelet. Bruk lavere verdi for små eksempler.",
            type: "number",
        }),
    ],
    preview: {
        select: {
            title: "storyName",
            subtitle: "storyDescription",
        },
        prepare({ title, subtitle }) {
            return {
                title: title ? title : "Story",
                subtitle,
            };
        },
    },
});
