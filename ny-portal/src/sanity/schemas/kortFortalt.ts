import {
    ListIcon,
    CheckmarkCircleIcon,
    CloseCircleIcon,
    LinkIcon,
} from "@sanity/icons";
import { defineType, defineField } from "sanity";

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
            return {
                title: `${select.bruk.length} punkt på bruk, ${select.ikkebruk.length} punkter på ikke bruk`,
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
