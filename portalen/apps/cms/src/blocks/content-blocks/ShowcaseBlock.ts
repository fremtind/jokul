import { Block, Field } from "payload/types";

export const showcaseFields: Field[] = [
    {
        type: "array",
        name: "showcaseItem",
        labels: {
            singular: "Eksempel",
            plural: "Eksempler",
        },
        fields: [
            {
                type: "text",
                name: "title",
                label: "Tittel",
                required: true,
                admin: {
                    description: "Kort stikkord om bruken av mønstret eller komponenten.",
                    placeholder: 'F.eks. "Dekningsvelger"',
                },
            },
            {
                type: "text",
                name: "src",
                label: "Videokilde",
                required: false,
                admin: {
                    description: "Sett in URL hvis du skal laste opp fra Vimeo, ellers la stå tom.",
                },
            },
            {
                name: "example",
                label: "Eksempel",
                type: "upload",
                relationTo: "media",
                required: false,
            },
            {
                type: "text",
                name: "origin",
                label: "Opprinnelse",
                required: true,
                admin: {
                    description: "Fortell hvor eksemplet kommer fra, f.eks. 'Fra PM øvrig skade'",
                },
            },
            {
                type: "textarea",
                name: "description",
                label: "Beskrivelse",
                admin: {
                    description: "En kort beskrivelse av eksemplet",
                },
            },
        ],
    },
];

export const ShowcaseBlock: Block = {
    slug: "showcase",
    imageURL: "/media/mediashowcase.webp",
    fields: showcaseFields,
};
