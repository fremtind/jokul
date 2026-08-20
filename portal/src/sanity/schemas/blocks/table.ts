import { DocumentSheetIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const table = defineType({
    name: "jokul_table",
    title: "Tabell",
    type: "object",
    icon: DocumentSheetIcon,
    groups: [
        { name: "content", title: "Innhold", default: true },
        { name: "options", title: "Valg" },
    ],
    fields: [
        {
            name: "caption",
            title: "Caption",
            type: "string",
            group: "content",
        },
        {
            name: "table",
            title: "Tabell",
            type: "table",
            description: "Husk at første rad blir titler",
            group: "content",
        },
        {
            name: "show_caption",
            title: "Vis caption",
            description: "Viser caption-feltet visuelt på siden",
            type: "boolean",
            group: "options",
        },
        {
            name: "sticky_header",
            title: "Sticky header",
            description: "Holder headeren synlig ved scrolling.",
            type: "boolean",
            group: "options",
        },
        {
            name: "copy_button",
            title: "Enkel kopiering",
            description:
                "Viser en knapp ved siden av verdien i første kolonne for enkel kopiering av verdien.",
            type: "boolean",
            group: "options",
        },
    ],
    initialValue: {
        show_caption: false,
        sticky_header: true,
        copy_button: false,
    },
    preview: {
        select: {
            title: "caption",
        },
        prepare({ title }) {
            return {
                title: title ? title : "Tabell",
            };
        },
    },
});
