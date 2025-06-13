import { CheckmarkCircleIcon, CloseCircleIcon, ListIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { componentPageLink } from "./links/componentPageLink";

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
            of: [
                {
                    type: "object",
                    title: "Punkt",
                    icon: CheckmarkCircleIcon,
                    fields: [
                        {
                            name: "bruk_punkt",
                            title: "Punkt",
                            description:
                                "Skriv punktet som løpende tekst fra overskriften. Hold punktet kort.",
                            type: "array",
                            of: [
                                {
                                    type: "block",
                                    marks: {
                                        decorators: [],
                                        annotations: [componentPageLink],
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
            of: [
                {
                    type: "object",
                    title: "Punkt",
                    icon: CloseCircleIcon,
                    fields: [
                        {
                            name: "ikke_bruk_punkt",
                            title: "Punkt",
                            description:
                                "Skriv punktet som løpende tekst fra overskriften. Hold punktet kort.",
                            type: "array",
                            of: [
                                {
                                    type: "block",
                                    marks: {
                                        decorators: [],
                                        annotations: [componentPageLink],
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
