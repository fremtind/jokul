"use client";

import { client } from "@/sanity/lib/client";
import type { PortableTextReactComponents } from "@portabletext/react";
import { PortableText as PortableTextReact } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageObject } from "@sanity/image-url";
import type { FC, ReactNode } from "react";
import slugify from "slugify";
import { DoAndDont } from "./do-and-dont/DoAndDont";
import { KortFortalt } from "./kort-fortalt/KortFortalt";
import { LinkCard } from "./link-card/LinkCard";
import { ComponentPageLink } from "./link/ComponentPageLink";
import { Link } from "./link/Link";
import {
    CheckListItem,
    CrossListItem,
    ListItem,
    OrderedList,
    UnorderedList,
} from "./list";
import { MessageBox } from "./messageBox/MessageBox";
import { Storybook } from "./storybook-story/Storybook";
import { Table } from "./table/Table";
import { CodeBlock } from "./typography/Typography";

interface Props {
    blocks: TypedObject[] | null;
}

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImageObject) {
    return builder.image(source);
}

const jokulBlockTypes = {
    jokul_storybook: Storybook,
    jokul_componentKortFortalt: KortFortalt,
    jokul_codeBlock: CodeBlock,
    jokul_linkCard: LinkCard,
    jokul_doAndDont: DoAndDont,
    jokul_table: Table,
    jokul_messageBox: MessageBox,
    image: function ImageRenderer({
        value,
    }: {
        value: SanityImageObject & { alt?: string };
    }) {
        return (
            <img
                src={urlFor(value).width(1200).url()}
                alt={value.alt || ""}
                style={{ maxWidth: "55ch", width: "100%", height: "auto" }}
            />
        );
    },
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
            check: UnorderedList,
            cross: UnorderedList,
            number: OrderedList,
        },
        listItem: {
            bullet: ListItem,
            check: CheckListItem,
            cross: CrossListItem,
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
            // legg til flere hvis du trenger h4, h5 osv.
        },
    };

export const PortableText: FC<Props> = (props) =>
    props.blocks === null ? null : (
        <PortableTextReact
            value={props.blocks}
            components={jokulPortableTextComponents}
        />
    );
