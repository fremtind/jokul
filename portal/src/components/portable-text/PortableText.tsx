"use client";

import type { PortableTextReactComponents } from "@portabletext/react";
import { PortableText as PortableTextReact } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import type { FC } from "react";
import { ComponentCard } from "./component-card/ComponentCard";
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
    jokul_componentCard: ComponentCard,
};

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
    };

export const PortableText: FC<Props> = (props) =>
    props.blocks === null ? null : (
        <PortableTextReact
            value={props.blocks}
            components={jokulPortableTextComponents}
        />
    );
