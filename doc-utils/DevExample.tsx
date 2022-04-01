import React, { StrictMode, FC } from "react";
import { ComponentExample, Props as ComponentExampleProps } from "./ComponentExample";

interface Props extends ComponentExampleProps {
    title?: string;
    scrollable?: boolean;
}

export const DevExample: FC<Props> = ({ title, knobs, component, scrollable }) => {
    return (
        <StrictMode>
            <div className="jkl-dev-example">
                <ComponentExample title={title} knobs={knobs} component={component} scrollable={scrollable} />
            </div>
        </StrictMode>
    );
};
