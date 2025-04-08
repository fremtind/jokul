import type {
    PortableTextComponentProps,
    PortableTextReactComponents,
} from "@portabletext/react";
import { PortableText as PortableTextReact } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import type { FC } from "react";
import { Link } from "./link/Link";
import { ListItem, OrderedList, UnorderedList } from "./list";
import { Storybook } from "./storybook-story/Storybook";
import { CodeBlock, InlineCode } from "./typography/Typography";

interface Props {
    blocks: TypedObject[] | null;
}

const portableTextComponents: Record<
    string,
    FC<PortableTextComponentProps<any>>
> = {
    jokul_storybook: Storybook,
    jokul_codeBlock: CodeBlock,
};

export const baseComponentDefinition: Partial<PortableTextReactComponents> = {
    types: portableTextComponents,
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
        code: InlineCode,
    },
};

export const PortableText: FC<Props> = (props) => {
    const components = {
        ...baseComponentDefinition,
        types: {
            ...baseComponentDefinition.types,
        },
    };

    if (props.blocks === null) {
        return null;
    }

    return <PortableTextReact value={props.blocks} components={components} />;
};
