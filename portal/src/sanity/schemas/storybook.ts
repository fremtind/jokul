import { ComponentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { StorybookInput } from "../components/StorybookStoryInput";
export const storybook = defineType({
    name: "jokul_storybook",
    title: "Eksempel fra Storybook",
    type: "object",
    icon: ComponentIcon,
    fields: [
        defineField({
            name: "story",
            title: "Velg story",
            description: "Velg story fra Storybook",
            type: "jokul_storybookStory",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "code",
            title: "Eksempelkode",
            type: "jokul_codeBlock",
            options: {
                collapsed: true,
            },
        }),
        defineField({
            name: "height",
            title: "Høyde på eksempel (px)",
            initialValue: 360,
            description:
                "Valgfri høyde på Storybook-eksempelet. Bruk lavere verdi for små eksempler.",
            type: "number",
            validation: (Rule) => Rule.min(120).max(1200),
        }),
    ],
    preview: {
        select: {
            title: "story.storyName",
        },
        prepare({ title }) {
            return {
                title: title ? title : "Story uten navn",
            };
        },
    },
});

export const storybookStory = defineType({
    name: "jokul_storybookStory",
    title: "Story fra Storybook",
    type: "object",
    fields: [
        defineField({
            name: "storyId",
            title: "ID for story",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "storyName",
            title: "Navn på story",
            type: "string",
            readOnly: true,
        }),
    ],
    components: {
        input: StorybookInput,
    },
    preview: {
        select: {
            storyName: "storyName",
        },
        prepare(select) {
            return {
                title: select.storyName,
            };
        },
    },
});
