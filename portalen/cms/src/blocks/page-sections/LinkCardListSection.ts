import { Block } from "payload/types";
import { LinkCardList } from "../content-blocks";
import { createPageSectionBlock } from "./createPageSectionBlock";

export const LinkCardListSection: Block = createPageSectionBlock({
    ...LinkCardList,
    slug: "lcls",
    imageURL: "/media/medialenkekort.webp",
});
