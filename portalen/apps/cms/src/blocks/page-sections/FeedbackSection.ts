import { Block } from "payload/types";

export const FeedbackSection: Block = {
    slug: "feedback-section",
    imageURL: "/media/mediafeedback.webp",
    fields: [
        {
            name: "label",
            type: "text",
            required: true,
            defaultValue: "Hvor fornøyd er du med denne nettsiden?",
        },
        {
            name: "addOnQuestion",
            type: "text",
            required: true,
            defaultValue: "Vil du legge til noe mer?",
        },
    ],
};
