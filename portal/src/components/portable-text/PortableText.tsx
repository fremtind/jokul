"use client";

import type { PortableTextReactComponents } from "@portabletext/react";
import { PortableText as PortableTextReact } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import type { FC, ReactNode } from "react";
import slugify from "slugify";
import { child } from "winston";
import { KortFortalt } from "./kort-fortalt/KortFortalt";
import { LinkCard } from "./link-card/LinkCard";
import { ComponentPageLink } from "./link/ComponentPageLink";
import { Link } from "./link/Link";
import { ListItem, OrderedList, UnorderedList } from "./list";
import { Storybook } from "./storybook-story/Storybook";
import { CodeBlock } from "./typography/Typography";

interface Props {
    blocks: TypedObject[] | null;
}

const jokulBlockTypes: PortableTextReactComponents["types"] = {
    jokul_storybook: Storybook,
    jokul_componentKortFortalt: KortFortalt,
    jokul_codeBlock: CodeBlock,
    jokul_linkCard: LinkCard,
};

function getTextFromChildren(children: ReactNode): string {
    if (typeof children === "string") return children;
    if (Array.isArray(children)) {
        return children.map(getTextFromChildren).join(" ");
    }
    return ""; // ignore React elements for slug
}

export const jokulPortableTextComponents: Partial<PortableTextReactComponents> =
    {
        types: jokulBlockTypes,
        list: {
            bullet: UnorderedList,
            number: OrderedList,
        },
        listItem: {
            bullet: ListItem,
            number: ListItem,
        },
        marks: {
            link: Link,
            componentPageLink: ComponentPageLink,
            internalLink: ({ value, children }) => {
                const { slug = {} } = value;
                const href = `/${slug.current}`;
                console.log(value);
                return <a href={href}>{children}</a>;
            },
        },
        block: {
            h2: ({ children }) => {
                const text = getTextFromChildren(children);
                const slug = slugify(text, { lower: true, strict: true });
                return <h2 id={slug}>{children}</h2>;
            },
            h3: ({ children }) => {
                const text = getTextFromChildren(children);
                const slug = slugify(text, { lower: true, strict: true });
                return <h3 id={slug}>{children}</h3>;
            },
        },
    };

export const PortableText: FC<Props> = (props) =>
    props.blocks === null ? null : (
        <PortableTextReact
            value={props.blocks}
            components={jokulPortableTextComponents}
        />
    );
