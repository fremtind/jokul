import { richText } from "@/sanity/schemas/blocks/richText";
import { ImageIcon } from "@sanity/icons";

export const commonBlock = [
    richText,
    { type: "image", title: "Bilde", icon: ImageIcon },
    { type: "jokul_linkCard" },
    { type: "jokul_code" },
    { type: "jokul_examples" },
    { type: "jokul_storybook" },
    { type: "jokul_table" },
    { type: "jokul_qa" },
    { type: "jokul_messageBox" },
    { type: "jokul_doAndDont" },
];
