import { temaside } from "@/sanity/schemas/documents/temaside";
import { code } from "./code";
import { codeBlock } from "./codeBlock";
import { codeExample } from "./codeExample";
import { componentProps } from "./componentProps";
import { doAndDont } from "./doAndDont";
import { blogPost } from "./documents/blogPost";
import { component } from "./documents/component";
import { fundamentals } from "./documents/fundamentals";
import { story } from "./documents/story";
import { examples } from "./examples";
import { kortFortalt } from "./kortFortalt";
import { linkCard } from "./linkCard";
import { messageBox } from "./messageBox";
import { questionsAndAnswers } from "./questionsAndAnswers";
import { storybook, storybookStory } from "./storybook";
import { table } from "./table";

export const schemaTypes = [
    component,
    blogPost,
    temaside,
    componentProps,
    code,
    codeExample,
    codeBlock,
    examples,
    story,
    storybook,
    storybookStory,
    kortFortalt,
    linkCard,
    doAndDont,
    fundamentals,
    table,
    messageBox,
    questionsAndAnswers,
];
