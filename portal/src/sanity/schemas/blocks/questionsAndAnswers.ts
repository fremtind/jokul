import { richText } from "@/sanity/schemas/blocks/richText";
import { HelpCircleIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const questionsAndAnswers = defineType({
    name: "jokul_qa",
    title: "Spørsmål og svar",
    type: "object",
    icon: HelpCircleIcon,
    fields: [
        {
            name: "title",
            title: "Tittel",
            type: "string",
            hidden: ({ value }) => !value || value.length === 0,
        },
        {
            name: "faq",
            title: "Spørsmål og svar",
            type: "array",
            of: [
                {
                    type: "object",
                    icon: HelpCircleIcon,
                    name: "faqitem",
                    title: "Spørsmål og svar",
                    fields: [
                        {
                            type: "string",
                            name: "question",
                            title: "Spørsmål",
                        },
                        {
                            type: "array",
                            name: "answer",
                            title: "Svar",
                            of: [richText],
                            validation: (Rule) =>
                                Rule.required()
                                    .min(1)
                                    .error("Svar kan ikke være tomt"),
                        },
                    ],
                    preview: {
                        select: {
                            title: "question",
                            subtitle: "answer",
                        },
                    },
                },
            ],
        },
    ],
    preview: {
        select: {
            questions: "faq",
        },
        prepare({ questions }) {
            const count = questions ? questions.length : "Ingen";
            return {
                title: "Spørsmål og svar",
                subtitle: `${count} spørsmål`,
            };
        },
    },
});
