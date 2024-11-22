import { Block } from "payload/types";
import { showcaseFields } from "../content-blocks/ShowcaseBlock";
import { createPageSectionBlock } from "./createPageSectionBlock";

export const ShowcaseSection: Block = createPageSectionBlock({
    slug: "sc-s",
    fields: showcaseFields,
    defaultHeading: "Showcase",
    labels: {
        singular: "Showcase",
        plural: "Showcaser",
    },
    imageURL: "/media/mediashowcase.webp",
});
