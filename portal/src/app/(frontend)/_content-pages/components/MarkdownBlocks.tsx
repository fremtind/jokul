import type { ReactNode } from "react";
import { AnchorIconButton } from "./AnchorIconButton";
import { SimpleCodeBlock } from "./SimpleCodeBlock";
import type { MarkdownBlock } from "../lib/markdown.types";
import { MarkdownInlineContent } from "./MarkdownInlineContent";
import styles from "../content-page.module.scss";

interface MarkdownBlocksProps {
    blocks: MarkdownBlock[];
}

const renderBlock = (block: MarkdownBlock, index: number): ReactNode => {
    if (block.type === "heading") {
        if (block.level === 2) {
            return (
                <div
                    key={index}
                    id={block.id}
                    className={styles.releaseHeading}
                >
                    <h2 className={styles.releaseTitle}>{block.text}</h2>
                    {block.id ? (
                        <AnchorIconButton href={`#${block.id}`} />
                    ) : null}
                </div>
            );
        }

        if (block.level === 3) {
            return <h3 key={index}>{block.text}</h3>;
        }

        return <h4 key={index}>{block.text}</h4>;
    }

    if (block.type === "list") {
        return (
            <ul key={index}>
                {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                        <MarkdownInlineContent text={item.join(" ")} />
                    </li>
                ))}
            </ul>
        );
    }

    if (block.type === "code") {
        return (
            <div key={index} className={styles.codeBlockWrapper}>
                <SimpleCodeBlock code={block.code} language={block.language} />
            </div>
        );
    }

    return (
        <p key={index}>
            <MarkdownInlineContent text={block.lines.join(" ")} />
        </p>
    );
};

export const MarkdownBlocks = ({ blocks }: MarkdownBlocksProps) =>
    blocks.map((block, index) => renderBlock(block, index));
