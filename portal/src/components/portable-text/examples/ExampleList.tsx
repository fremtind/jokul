import type { Jokul_examples, Jokul_story } from "@/sanity/types";
import { Flex } from "@fremtind/jokul/flex";
import type { PortableTextTypeComponentProps } from "next-sanity";
import React, { type FC } from "react";
import { ExampleItem } from "./ExampleItem";

import "./examples.scss";

type Props = Omit<Jokul_examples, "examples"> & {
    examples: Jokul_story[];
};

export const ExampleList: FC<PortableTextTypeComponentProps<Props>> = ({
    value,
}) => {
    const { title, examples, layout } = value;

    if (!examples) {
        return null;
    }

    return (
        <Flex direction="column" gap="s">
            {title && <h2>{title}</h2>}
            <ul className={`examples ${layout}`}>
                {examples.map((example) => (
                    <li key={example.id}>
                        <ExampleItem example={example} />
                    </li>
                ))}
            </ul>
        </Flex>
    );
};
