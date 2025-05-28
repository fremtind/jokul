import { ComponentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { StorybookInput } from "../components/StorybookStoryInput";
export const storybook = defineType({
    name: "jokul_storybook",
    title: "Eksempler fra Storybook",
    type: "object",
    icon: ComponentIcon,
    fields: [
        defineField({
            name: "stories",
            title: "Velg stories",
            description:
                "Velg stories fra Storybook. Hvis du velger mer enn én vil man kunne velge blant dem i eksempelvisningen.",
            type: "array",
            of: [
                {
                    type: "jokul_storybookStory",
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            story0: "stories.0.storyName",
            story1: "stories.1.storyName",
            story2: "stories.2.storyName",
            story3: "stories.3.storyName",
        },
        prepare({ story0, story1, story2, story3 }) {
            const stories = [story0, story1, story2].filter(Boolean);
            const subtitle = stories.length > 1 ? stories.join(", ") : "";
            const hasMoreStories = Boolean(story3);

            return {
                title: "Storybook-eksempel",
                subtitle: hasMoreStories ? `${subtitle} og flere` : subtitle,
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
