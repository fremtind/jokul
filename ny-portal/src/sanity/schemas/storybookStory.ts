import { defineType, defineField } from "sanity";
import { StorybookStoryInput } from "../components/StorybookStoryInput";

export const storybookStory = defineType({
    name: "jokul_storybookStory",
    title: "Eksempel fra Storybook",
    type: "object",
    fields: [
        defineField({
            name: "storybookStory",
            title: "Velg story",
            type: "string",
            components: {
                input: StorybookStoryInput,
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
});
