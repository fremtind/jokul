import { StorySelector2 } from "@/sanity/components/StorySelector2";
import { BookIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const story = defineType({
    name: "jokul_storyId",
    title: "Story",
    type: "object",
    icon: BookIcon,
    fields: [
        {
            name: "story",
            title: "Story",
            type: "string",
            components: {
                input: StorySelector2,
            },
        },
    ],
    preview: {
        select: {
            story: "story.storyName",
        },
        prepare({ story }) {
            return {
                title: story,
            };
        },
    },
});
