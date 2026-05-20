import { internalLink } from "@/sanity/schemas/links/internalLink";
import {
    CheckmarkCircleIcon,
    CloseCircleIcon,
    EarthGlobeIcon,
} from "@sanity/icons";
import { defineField } from "sanity";

export const commonBlock = [
    defineField({
        name: "block",
        type: "block",
        lists: [
            { title: "Punktliste", value: "bullet" },
            { title: "Nummerert liste", value: "number" },
            {
                title: "Oppfordringsliste",
                value: "check",
                icon: CheckmarkCircleIcon,
            },
            {
                title: "Frarådningsliste",
                value: "cross",
                icon: CloseCircleIcon,
            },
        ],
        marks: {
            annotations: [
                {
                    name: "link",
                    type: "object",
                    title: "Ekstern lenke",
                    icon: EarthGlobeIcon,
                    fields: [
                        {
                            name: "href",
                            type: "url",
                            title: "URL",
                        },
                        {
                            title: "Åpne i ny fane",
                            name: "blank",
                            type: "boolean",
                            initialValue: false,
                        },
                    ],
                },
                internalLink,
            ],
        },
    }),
    { type: "image" },
];
