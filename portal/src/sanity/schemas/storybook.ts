import { InlineElementIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
export const storybook = defineType({
    name: "jokul_storybook",
    title: "Eksempel fra Storybook",
    type: "object",
    icon: InlineElementIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "stories",
            title: "Stories",
            type: "array",
            validation: (Rule) => Rule.unique(),
            of: [
                {
                    type: "reference",
                    name: "jokul_storybookStory",
                    to: [{ type: "jokul_storybookStory" }],
                },
            ],
        }),
    ],
    preview: {
        select: {
            story1: "stories.0.storyName",
            story2: "stories.1.storyName",
            story3: "stories.2.storyName",
            story4: "stories.3.storyName",
        },
        prepare({ story1, story2, story3, story4 }) {
            console.log(story1, story2, story3);
            const stories = [story1, story2, story3, story4].filter(Boolean);
            const count = stories ? stories.length : "Ingen";

            return {
                title: `${count} stories`,
                subtitle: stories.map((s) => s).join(", "),
            };
        },
    },
});
