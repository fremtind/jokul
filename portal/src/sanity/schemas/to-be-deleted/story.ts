import { StorySelector } from "@/sanity/components/to-be-deleted/StorySelector";
import { BookIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const story = defineType({
    name: "jokul_storyId",
    title: "Story",
    type: "object",
    icon: BookIcon,
    hidden: true,
    fields: [
        {
            name: "story",
            title: "Story",
            type: "string",
            components: {
                input: StorySelector,
            },
        },
    ],
    preview: {
        select: {
            story: "story",
        },
        prepare({ story }) {
            return {
                title: story,
            };
        },
    },
});
