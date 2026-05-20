import { documents } from "@/sanity/schemas/documents";
import { seoFields } from "@/sanity/schemas/fields";
import { code } from "./code";
import { codeBlock } from "./codeBlock";
import { codeExample } from "./codeExample";
import { componentProps } from "./componentProps";
import { doAndDont } from "./doAndDont";
import { siteData } from "./documents/siteData";
import { story } from "./documents/story";
import { examples } from "./examples";
import { kortFortalt } from "./kortFortalt";
import { linkCard } from "./linkCard";
import { internalLink } from "./links/internalLink";
import { messageBox } from "./messageBox";
import { questionsAndAnswers } from "./questionsAndAnswers";
import { storybook, storybookStory } from "./storybook";
import { table } from "./table";

export const schemaTypes = [
    componentProps,
    code,
    ...documents,
    codeExample,
    codeBlock,
    examples,
    story,
    storybook,
    storybookStory,
    kortFortalt,
    linkCard,
    doAndDont,
    table,
    messageBox,
    questionsAndAnswers,
    siteData,
    seoFields,
    internalLink,
];
