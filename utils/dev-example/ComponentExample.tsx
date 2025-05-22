import React, { type FC } from "react";
import type {
    BoolProp,
    ChoiceProp,
    CodeExample,
    ExampleComponentProps,
} from "./";
import { ExampleBase } from "./ExampleBase";

export interface Props {
    component: FC<ExampleComponentProps>;
    title?: string;
    scrollable?: boolean;
    noDensity?: boolean;
    knobs?: {
        boolProps?: Array<BoolProp>;
        choiceProps?: Array<ChoiceProp>;
    };
    isWide?: boolean;
    codeExample?: CodeExample;
    style?: React.CSSProperties;
}

export const ComponentExample: FC<Props> = ({ component, ...rest }) => {
    const C = component;

    return (
        <ExampleBase
            component={({ boolValues, choiceValues, displayValues }) => (
                <>
                    Linting?
                    <C
                        boolValues={boolValues}
                        choiceValues={choiceValues}
                        displayValues={displayValues}
                    />
                </>
            )}
            {...rest}
        />
    );
};
