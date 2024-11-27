import { Block } from "payload/types";
import { LiveDemoBlock } from "../content-blocks/LiveDemoBlock";
import { createPageSectionBlock } from "./createPageSectionBlock";

export const LiveDemoSection: Block = createPageSectionBlock({
    ...LiveDemoBlock,
    slug: "lds",
    defaultHeading: "Live demo",
    imageURL: "/media/mediakodeeksempel.webp",
});
