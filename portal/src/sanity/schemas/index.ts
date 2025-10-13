import { temaside } from "@/sanity/schemas/temaside";
import { blogPost } from "./blogPost";
import { codeBlock } from "./codeBlock";
import { codeExample } from "./codeExample";
import { component } from "./component";
import { componentProps } from "./componentProps";
import { kortFortalt } from "./kortFortalt";
import { linkCard } from "./linkCard";
import { storybook, storybookStory } from "./storybook";

export const schemaTypes = [
    component,
    blogPost,
    temaside,
    componentProps,
    codeExample,
    codeBlock,
    storybook,
    storybookStory,
    kortFortalt,
    linkCard,
];
