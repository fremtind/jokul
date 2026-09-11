import { componentPageLink } from "@/sanity/schemas/to-be-deleted/componentPageLink";
import { kortFortalt } from "@/sanity/schemas/to-be-deleted/kortFortalt";
import { codeBlock } from "./codeBlock";
import { codeExample } from "./codeExample";
import { componentProps } from "./componentProps";
import { examples } from "./examples";
import { story as storyBlock } from "./story";
import { story as storyDocument } from "./storyDocument";
import { storybook, storybookStory } from "./storybook";

export const toBeDeleted = [
    componentPageLink,
    componentProps,
    codeExample,
    codeBlock,
    storybook,
    storybookStory,
    kortFortalt,
    examples,
    storyBlock,
    storyDocument,
];
