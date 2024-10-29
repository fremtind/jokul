import { Block } from "payload/types";
import { linkCardFields } from "../content-blocks/LinkCardList";

export const VideoCTA: Block = {
    slug: "video-cta",
    labels: {
        singular: "Video med lenkekort",
        plural: "Videoer med lenkekort",
    },
    imageURL: "/media/mediavideocta.webp",
    fields: [
        {
            type: "group",
            name: "video",
            label: "Video",
            fields: [
                // TODO: Bytt til relationship/media når vi har funnet ut av bug'en med video
                {
                    type: "text",
                    name: "url",
                    label: "URL til bakgrunnsvideo",
                    required: true,
                },
                {
                    type: "checkbox",
                    name: "loop",
                    label: "Loop video?",
                    defaultValue: false,
                    required: true,
                },
            ],
        },
        ...linkCardFields,
    ],
};
