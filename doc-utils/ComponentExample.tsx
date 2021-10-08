import React, { FC } from "react";
import { ExampleComponentProps, ChoiceProp, BoolProp } from "./";
import { ExampleBase } from "./ExampleBase";

export interface Props {
    component: FC<ExampleComponentProps>;
    title?: string;
    knobs?: {
        boolProps?: Array<BoolProp>;
        choiceProps?: Array<ChoiceProp>;
    };
}

export const ComponentExample: FC<Props> = ({ component, knobs, title = "Komponent", children }) => {
    const C = component;

    return (
        <ExampleBase
            knobs={knobs}
            title={title}
            responsiveLayout={false}
            component={({ boolValues, choiceValues }) => <C boolValues={boolValues} choiceValues={choiceValues} />}
        >
            {children}
        </ExampleBase>
    );
};
