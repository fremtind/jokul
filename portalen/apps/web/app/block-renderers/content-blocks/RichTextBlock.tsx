import React, { type FC } from "react";
import { type ContentBlock } from "./types";
import { type Leaf, type RichTextNodeRenderer, serializeRichText } from "~/components/rich-text";
import { useMainMenu } from "~/utils";

type RichTextBlockProps = {
    contentBlock: ContentBlock;
    renderers?: Record<string, RichTextNodeRenderer>;
    fallbackRenderer?: RichTextNodeRenderer;
};

export const RichTextBlock: FC<RichTextBlockProps> = ({ contentBlock, renderers, fallbackRenderer }) => {
    const mainMenu = useMainMenu();

    if (contentBlock.blockType !== "rich-text") {
        return null;
    }

    const { content } = contentBlock;

    if (!content) {
        return null;
    }

    return (
        <div className="jkl-body jkl-portal-rich-text">
            {serializeRichText({
                mainMenu,
                renderers,
                fallbackRenderer,
                children: content as Leaf[],
            })}
        </div>
    );
};
