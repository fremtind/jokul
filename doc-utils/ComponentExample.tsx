import React, { FC } from "react";
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
    style?: React.CSSProperties;
}

export const ComponentExample: FC<Props> = ({ component, ...rest }) => {
    const C = component;

    return (
        <ExampleBase
            component={({ boolValues, choiceValues, displayValues }) => (
                <C boolValues={boolValues} choiceValues={choiceValues} displayValues={displayValues} />
            )}
            {...rest}
        />
    );
};
