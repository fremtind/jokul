import { LinkList } from "@fremtind/jokul/link-list";
import type { TypedObject } from "@portabletext/types";
import slugify from "slugify";

import styles from "../component.module.scss";

interface Heading {
    text: string;
    slug: string;
    level: string;
}

interface Block extends TypedObject {
    _type: "block";
    style?: string;
    children: { text: string }[];
}

interface KortFortaltBlock extends TypedObject {
    _type: "jokul_componentKortFortalt";
}

interface RelatedComponentsBlock extends TypedObject {
    _type: "related_components";
}

interface ComponentNavProps {
    blocks: TypedObject[];
}

function isBlock(block: TypedObject): block is Block {
    return block._type === "block";
}

function isKortFortalt(block: TypedObject): block is KortFortaltBlock {
    return block._type === "jokul_componentKortFortalt";
}

function isRelatedComponents(
    block: TypedObject,
): block is RelatedComponentsBlock {
    return block._type === "related_components";
}

export const ComponentNav = ({ blocks }: ComponentNavProps) => {
    const headings: Heading[] = blocks.flatMap((block) => {
        if (isBlock(block) && /^h[2-3]$/.test(block.style || "")) {
            const text = block.children.map((child) => child.text).join(" ");
            const slug = slugify(text, { lower: true, strict: true });
            return [{ text, slug, level: block.style || "h2" }];
        }

        if (isKortFortalt(block)) {
            return [
                { text: "Kort fortalt", slug: "kort-fortalt", level: "h2" },
            ];
        }

        if (isRelatedComponents(block)) {
            return [
                {
                    text: "Relaterte komponenter",
                    slug: "relaterte-komponenter",
                    level: "h2",
                },
            ];
        }

        return [];
    });

    return (
        <LinkList className={styles.toc} variant="ordered">
            {headings.map((heading) => (
                <LinkList.Item key={heading.slug}>
                    <LinkList.Link href={`#${heading.slug}`} key={heading.slug}>
                        {heading.text}
                    </LinkList.Link>
                </LinkList.Item>
            ))}
        </LinkList>
    );
};
