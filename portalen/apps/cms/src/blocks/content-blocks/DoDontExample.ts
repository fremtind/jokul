import { type Block } from "payload/types";
import prettierFormat from "../../hooks/prettierFormat";

export const DoDontExample: Block = {
    slug: "dodont-example",
    labels: {
        singular: "Do/Don't-eksempel",
        plural: "Do/Don't-eksempler",
    },
    imageURL: "/media/mediadodont.webp",
    fields: [
        {
            type: "array",
            name: "doDontItem",
            label: "Eksempler",
            labels: {
                singular: "Eksempel",
                plural: "Eksempler",
            },
            fields: [
                {
                    name: "variant",
                    type: "radio",
                    label: "Variant",
                    options: [
                        {
                            label: "Kode",
                            value: "code",
                        },

                        {
                            label: "Bilde",
                            value: "image",
                        },
                    ],
                    defaultValue: "code",
                    required: false,
                },
                {
                    name: "code",
                    type: "textarea",
                    label: "Eksempelkode",
                    required: false,
                    admin: {
                        condition: (_, siblingData) => siblingData.variant && siblingData.variant === "code",
                    },
                    hooks: {
                        beforeValidate: [
                            ({ value, siblingData }) =>
                                prettierFormat(value, {
                                    language: "tsx",
                                    noinline: siblingData.noinline,
                                }),
                        ],
                    },
                },
                {
                    type: "checkbox",
                    name: "noinline",
                    defaultValue: false,
                    label: "Tillat kode utover rene komponenter",
                    admin: {
                        description: "F. eks. state. Se dokumentasjon fra React Live for mer info",
                        condition: (_, siblingData) => siblingData.variant && siblingData.variant === "code",
                    },
                },
                {
                    name: "image",
                    label: "Bilde",
                    type: "upload",
                    relationTo: "media",
                    admin: {
                        condition: (_, siblingData) => siblingData.variant && siblingData.variant === "image",
                    },
                },
                {
                    type: "textarea",
                    name: "description",
                    label: "Beskrivelse",
                    admin: {
                        description: "En kort beskrivelse av eksempelet",
                    },
                },
                {
                    name: "type",
                    type: "radio",
                    label: "Type egenskap",
                    options: [
                        {
                            label: "Do",
                            value: "do",
                        },
                        {
                            label: `Don't`,
                            value: "dont",
                        },
                        {
                            label: "Avoid",
                            value: "avoid",
                        },
                    ],
                    defaultValue: "do",
                    required: true,
                },
            ],
        },
    ],
};
