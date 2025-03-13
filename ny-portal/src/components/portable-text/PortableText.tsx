"use client";

import type {
    PortableTextComponentProps,
    PortableTextReactComponents,
} from "@portabletext/react";
import { PortableText as PortableTextReact } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import type { FC } from "react";
import { CodeExample } from "./code-example";
import { StorybookStory } from "./storybook-story/StorybookStory";
import { PropsDocumentation } from "./props-documentation/PropsDocumentation";

interface Props {
    blocks: TypedObject[] | null;
}

const portableTextComponents: Record<
    string,
    FC<PortableTextComponentProps<any>>
> = {
    jokul_componentProps: PropsDocumentation,
    jokul_codeExample: CodeExample,
    jokul_storybookStory: StorybookStory,
};

export const baseComponentDefinition: Partial<PortableTextReactComponents> = {
    types: portableTextComponents,
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
