import React, { FC, VFC } from "react";
import { ExampleComponentProps, ChoiceProp, BoolProp } from "./";
import { ExampleBase } from "./ExampleBase";

export interface Props {
    component: FC<ExampleComponentProps>;
    title?: string;
    scrollable?: boolean;
    knobs?: {
        boolProps?: Array<BoolProp>;
        choiceProps?: Array<ChoiceProp>;
    };
    codeExample?: string | ((options: ExampleComponentProps) => string);
}

export const ComponentExample: VFC<Props> = ({ component, ...rest }) => {
    const C = component;

    return (
        <ExampleBase
            responsiveLayout={false}
            component={({ boolValues, choiceValues }) => <C boolValues={boolValues} choiceValues={choiceValues} />}
            {...rest}
        />
    );
};
