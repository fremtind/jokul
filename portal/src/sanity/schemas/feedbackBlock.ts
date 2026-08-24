import { FeedbackIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const feedbackBlock = defineType({
    name: "jokul_feedbackBlock",
    title: "Tilbakemelding",
    type: "object",
    icon: FeedbackIcon,
    fields: [
        {
            title: "Spørsmål",
            name: "question",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: "question",
        },
        prepare({ title }) {
            return {
                title: title,
            };
        },
    },
});
