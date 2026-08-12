import { documents } from "@/sanity/schemas/documents";
import { seoFields } from "@/sanity/schemas/fields";
import { toBeDeleted } from "@/sanity/schemas/to-be-deleted";
import { code } from "./code";
import { doAndDont } from "./doAndDont";
import { siteData } from "./documents/siteData";
import { story } from "./documents/story";
import { examples } from "./examples";
import { linkCard } from "./linkCard";
import { internalLink } from "./links/internalLink";
import { messageBox } from "./messageBox";
import { questionsAndAnswers } from "./questionsAndAnswers";
import { table } from "./table";

export const schemaTypes = [
    code,
    ...documents,
    ...toBeDeleted,
    examples,
    story,
    linkCard,
    doAndDont,
    table,
    messageBox,
    questionsAndAnswers,
    siteData,
    seoFields,
    internalLink,
];
