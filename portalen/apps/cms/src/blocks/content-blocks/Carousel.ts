import { type Block } from "payload/types";

export const Carousel: Block = {
    slug: "carousel",
    labels: {
        singular: "Karusell",
        plural: "Karuseller",
    },
    imageURL: "/media/mediakarusell.webp",
    fields: [
        {
            type: "array",
            name: "steps",
            label: "Steg",
            labels: {
                singular: "Steg",
                plural: "Steg",
            },
            required: true,
            fields: [
                {
                    name: "image",
                    label: "Bilde",
                    type: "upload",
                    relationTo: "media",
                },
                {
                    type: "text",
                    name: "title",
                    label: "Tittel",
                },
                {
                    type: "richText",
                    name: "description",
                    label: "Beskrivelse",
                },
            ],
        },
    ],
};
