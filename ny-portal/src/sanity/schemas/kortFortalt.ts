import {
    CheckmarkCircleIcon,
    CloseCircleIcon,
    LinkIcon,
    ListIcon,
} from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const kortFortalt = defineType({
    name: "jokul_componentKortFortalt",
    title: "Kort fortalt",
    type: "object",
    icon: ListIcon,
    preview: {
        select: {
            bruk: "bruk",
            ikkebruk: "ikke_bruk",
        },
        prepare(select) {
            const { bruk, ikkebruk } = select;
            if (bruk && ikkebruk) {
                return {
                    title: "Kort fortalt",
                    subtitle: `${select.bruk.length + select.ikkebruk.length} punkt(er)`,
                };
            }

            return {
                title: "Kort fortalt",
            };
        },
    },
    fields: [
        defineField({
            name: "bruk",
            title: "Bruk [komponent]:",
            type: "array",
            icon: CheckmarkCircleIcon,
            of: [
                {
                    type: "object",
                    icon: CheckmarkCircleIcon,
                    fields: [
                        {
                            type: "array",
                            name: "bruk_punkt",
                            title: "Punkt",
                            icon: CheckmarkCircleIcon,
                            description:
                                "Skriv punktet som løpende tekst fra overskriften. Hold punktet kort.",
                            of: [
                                {
                                    type: "block",
                                    marks: {
                                        decorators: [],
                                        annotations: [
                                            {
                                                name: "internalLink",
                                                type: "object",
                                                title: "Link til alternativ",
                                                icon: LinkIcon,
                                                fields: [
                                                    {
                                                        name: "reference",
                                                        type: "reference",
                                                        title: "Reference",
                                                        to: [
                                                            {
                                                                type: "jokul_component",
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    styles: [],
                                    lists: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: "ikke_bruk",
            title: "Ikke bruk [komponent]:",
            type: "array",
            icon: CloseCircleIcon,
            of: [
                {
                    type: "object",
                    icon: CloseCircleIcon,
                    fields: [
                        {
                            type: "array",
                            name: "ikke_bruk_punkt",
                            title: "Punkt",
                            icon: CloseCircleIcon,
                            description:
                                "Skriv punktet som løpende tekst fra overskriften.",
                            of: [
                                {
                                    type: "block",
                                    marks: {
                                        decorators: [],
                                        annotations: [
                                            {
                                                name: "internalLink",
                                                type: "object",
                                                title: "Link til alternativ",
                                                icon: LinkIcon,
                                                fields: [
                                                    {
                                                        name: "reference",
                                                        type: "reference",
                                                        title: "Reference",
                                                        to: [
                                                            {
                                                                type: "jokul_component",
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    styles: [],
                                    lists: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        }),
    ],
});
