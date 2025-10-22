import { InlineIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const doAndDont = defineType({
    name: "jokul_doAndDont",
    title: "Riktig og feil bruk",
    type: "object",
    icon: InlineIcon,
    fields: [
        {
            name: "do",
            title: "Riktig bruk",
            type: "image",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "dont",
            title: "Feil bruk",
            type: "image",
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: "Riktig og feil bruk",
        },
        prepare(selection) {
            return {
                title: "Riktig og feil bruk",
            };
        },
    },
});
