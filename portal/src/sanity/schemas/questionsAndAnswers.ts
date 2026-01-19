import { HelpCircleIcon } from "@sanity/icons";
import { defineType } from "sanity";

const QandASectionName = "Spørsmål og svar";

export const questionsAndAnswers = defineType({
    name: "jokul_qa",
    title: `${QandASectionName} seksjon`,
    type: "object",
    icon: HelpCircleIcon,
    initialValue: {
        title: QandASectionName,
    },
    fields: [
        {
            name: "title",
            title: "Tittel",
            type: "string",
        },
        {
            name: "faq",
            title: QandASectionName,
            type: "array",
            of: [
                {
                    type: "object",
                    icon: HelpCircleIcon,
                    name: "faqitem",
                    title: QandASectionName,
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
                            of: [{ type: "block" }],
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
            title: "title",
            questions: "questions_and_answers",
        },
        prepare({ title, questions }) {
            const count = questions ? questions.length : "Ingen";
            return {
                title: title ? title : QandASectionName,
                subtitle: `${count} spørsmål`,
            };
        },
    },
});
