import { InlineIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const doAndDont = defineType({
    name: "jokul_doAndDont",
    title: "Riktig/Feil",
    type: "object",
    icon: InlineIcon,
    fields: [
        {
            name: "do",
            title: "Riktig",
            type: "image",
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alt-tekst",
                },
            ],
        },
        {
            name: "dont",
            title: "Feil",
            type: "image",
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alt-tekst",
                },
            ],
        },
    ],
    preview: {
        select: {
            do: "do",
            dont: "dont",
        },
        prepare({ do: doImage, dont }) {
            const type =
                doImage?.asset && dont?.asset
                    ? "Riktig/Feil"
                    : doImage?.asset
                      ? "Riktig/Feil: Riktig"
                      : dont?.asset
                        ? "Riktig/Feil: Feil"
                        : "Riktig/Feil: Ingen eksempler enda";
            const image = doImage?.asset ? doImage : dont?.asset ? dont : null;

            return {
                title: type,
                media: image,
            };
        },
    },
});
