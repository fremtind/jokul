"use client";

import { ExampleItem } from "@/components/portable-text/examples/ExampleItem";
import type { Jokul_examples, Jokul_story } from "@/sanity/types";
import { Flex } from "@fremtind/jokul/flex";

import "portal/src/components/portable-text/examples/examples.scss";

type ExampleCardValue = {
    story?: Jokul_story | null;
};

type Props = {
    value?: ExampleCardValue;
};

export const ComponentExampleCard = ({ value }: Props) => {
    if (!value?.story) {
        return null;
    }

    const { story } = value;

    return (
        <Flex direction="column" gap="s">
            <div className="examples">
                <ExampleItem
                    example={{
                        ...story,
                    }}
                />
            </div>
        </Flex>
    );
};
