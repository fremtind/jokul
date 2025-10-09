import { CheckmarkCircleIcon, CloseCircleIcon, ListIcon } from "@sanity/icons";
import { defineType } from "sanity";

type CheckListItem = {
    status?: "check" | "cross";
    text?: string;
};

export const checkList = defineType({
    name: "jokul_checkList",
    title: "Sjekkliste",
    icon: ListIcon,
    type: "object",
    fields: [
        {
            name: "items",
            title: "Punkter",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "item",
                    fields: [
                        {
                            name: "type",
                            title: "Type",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Sjekk", value: "check" },
                                    { title: "Kryss", value: "cross" },
                                ],
                                layout: "radio",
                            },
                        },
                        {
                            name: "text",
                            title: "Tekst",
                            type: "string",
                        },
                    ],
                    preview: {
                        select: {
                            status: "status",
                            text: "text",
                        },
                        prepare({ status, text }: CheckListItem) {
                            return {
                                title: text || "",
                                media:
                                    status === "check"
                                        ? CheckmarkCircleIcon
                                        : CloseCircleIcon,
                            };
                        },
                    },
                },
            ],
        },
    ],
    preview: {
        select: {
            items: "items",
        },
        prepare({ items }: { items?: CheckListItem[] }) {
            return {
                title: "Sjekkliste",
                subtitle: `${items?.length || 0} punkter`,
            };
        },
    },
});
