import React, { type FC } from "react";
import { Text } from "slate";
import { serializeRichText } from "./serializeRichText";
import { type RichTextChildren, type RichTextNodeRenderer } from "./types";
import { useMainMenu } from "~/utils";

type RichTextProps = Omit<JSX.IntrinsicElements["div"], "content"> & {
    content: any;
    renderers?: Record<string, RichTextNodeRenderer>;
    fallbackRenderer?: RichTextNodeRenderer;
};

const RichText: FC<RichTextProps> = ({
    className,
    content,
    renderers,
    fallbackRenderer,
}) => {
    const mainMenu = useMainMenu();

    if (!content) {
        return null;
    }

    if (typeof content === "string") {
        return <div className={className}>{content}</div>;
    }

    return (
        <div className={className}>
            {serializeRichText({
                mainMenu,
                renderers,
                fallbackRenderer,
                children: content,
            })}
        </div>
    );
};

export function richTextToString(richText?: RichTextChildren): string {
    if (!richText) {
        return "";
    }

    return richText
        .map((node) => {
            if (!node) {
                return "";
            }

            if (Text.isText(node)) {
                return node.text;
            }

            return richTextToString(node.children);
        })
        .filter((text) => text !== "")
        .join(" ");
}

export { RichText };
