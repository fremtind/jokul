import React from "react";
import { ExampleComponentProps, ChoiceProp } from "../src";
import { ExampleBase } from "./ExampleBase";

export interface Props {
    component: React.FC<ExampleComponentProps>;
    title?: string;
    knobs?: {
        boolProps?: Array<string>;
        choiceProps?: Array<ChoiceProp>;
    };
}

export function ComponentExample({ component, knobs, title = "Komponent" }: Props) {
    const C = component;

    return (
        <ExampleBase
            knobs={knobs}
            title={title}
            responsiveLayout={false}
            component={({ boolValues, choiceValues }) => <C boolValues={boolValues} choiceValues={choiceValues} />}
        />
    );
}
