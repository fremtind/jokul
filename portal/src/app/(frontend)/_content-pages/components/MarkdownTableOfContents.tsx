import { TableOfContents } from "@fremtind/jokul/table-of-contents";
import type { MarkdownHeadingBlock } from "../lib/markdown.types";
import styles from "../content-page.module.scss";

interface MarkdownTableOfContentsProps {
    items: MarkdownHeadingBlock[];
    label: string;
}

export const MarkdownTableOfContents = ({
    items,
    label,
}: MarkdownTableOfContentsProps) => {
    if (!items.length) {
        return null;
    }

    return (
        <TableOfContents className={styles.toc} label={label}>
            {items.map((item) => (
                <TableOfContents.Link key={item.id} href={`#${item.id}`}>
                    {item.text}
                </TableOfContents.Link>
            ))}
        </TableOfContents>
    );
};
