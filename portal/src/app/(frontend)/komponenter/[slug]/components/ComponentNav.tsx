import { LinkList } from "@fremtind/jokul/link-list";
import type { TypedObject } from "@portabletext/types";
import slugify from "slugify";

import styles from "../component.module.scss";

interface Heading {
    text: string;
    slug: string;
    level: string;
}
interface Block {
    _type: "block";
    style: string;
    children: { _type: string; text: string }[];
}

interface ComponentNavProps {
    blocks: TypedObject[];
}

function isBlock(obj: TypedObject): obj is Block {
    return obj._type === "block" && "style" in obj && "children" in obj;
}

export const ComponentNav = ({ blocks }: ComponentNavProps) => {
    const headings: Heading[] = [
        ...blocks
            .filter(isBlock)
            .filter((block) => /^h[2-3]$/.test(block.style))
            .map((block) => {
                const text = block.children
                    .map((child) => child.text)
                    .join(" ");
                const slug = slugify(text, { lower: true, strict: true });
                return { text, slug, level: block.style };
            }),
        { text: "Kort fortalt", slug: "kort-fortalt", level: "h2" },
    ];

    return (
        <LinkList className={styles.toc} variant="ordered">
            {headings.map((heading) => (
                <LinkList.Item key={heading.slug}>
                    <LinkList.Link href={`#${heading.slug}`}>
                        {heading.text}
                    </LinkList.Link>
                </LinkList.Item>
            ))}
        </LinkList>
    );
};
