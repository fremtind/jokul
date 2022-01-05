import React, { FC, VFC } from "react";
import { ExampleComponentProps, ChoiceProp, BoolProp, CodeExample } from "./";
import { ExampleBase } from "./ExampleBase";

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

export const ComponentExample: VFC<Props> = ({ component, ...rest }) => {
    const C = component;

    return (
        <ExampleBase
            component={({ boolValues, choiceValues }) => <C boolValues={boolValues} choiceValues={choiceValues} />}
            {...rest}
        />
    );
};
