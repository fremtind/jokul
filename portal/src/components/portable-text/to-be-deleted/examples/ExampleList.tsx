import type { Jokul_examples, Jokul_story } from "@/sanity/types";
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
    const { examples } = value;

    if (!examples) {
        return null;
    }

    return (
        <ul className="examples">
            {examples.map((example) => (
                <li key={example.id}>
                    <ExampleItem example={example} />
                </li>
            ))}
        </ul>
    );
};
