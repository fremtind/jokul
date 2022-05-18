import React, { FC, FC } from "react";
import { ExampleBase } from "./ExampleBase";
import { ExampleComponentProps, ChoiceProp, BoolProp, CodeExample } from "./";

export interface Props {
    component: FC<ExampleComponentProps>;
    title?: string;
    scrollable?: boolean;
    knobs?: {
        boolProps?: Array<BoolProp>;
        choiceProps?: Array<ChoiceProp>;
    };
    codeExample?: CodeExample;
}

export const ComponentExample: FC<Props> = ({ component, ...rest }) => {
    const C = component;

    return (
        <ExampleBase
            component={({ boolValues, choiceValues }) => <C boolValues={boolValues} choiceValues={choiceValues} />}
            {...rest}
        />
    );
};
