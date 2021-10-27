import React, { FC } from "react";
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
}

export const ComponentExample: FC<Props> = ({ component, knobs, title = "Komponent", children, ...rest }) => {
    const C = component;

    return (
        <ExampleBase
            knobs={knobs}
            title={title}
            responsiveLayout={false}
            component={({ boolValues, choiceValues }) => <C boolValues={boolValues} choiceValues={choiceValues} />}
            {...rest}
        >
            {children}
        </ExampleBase>
    );
};
