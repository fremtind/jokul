import React, { StrictMode, FC } from "react";
import { ComponentExample, Props as ComponentExampleProps } from "./ComponentExample";
import "./dev-example.scss";

interface Props extends ComponentExampleProps {
    title?: string;
    scrollable?: boolean;
}

export const DevExample: FC<Props> = (props) => {
    return (
        <StrictMode>
            <div className="jkl jkl-dev-example">
                <ComponentExample {...props} />
            </div>
        </StrictMode>
    );
};
