import React, { StrictMode, FC } from "react";
import { ComponentExample, Props as ComponentExampleProps } from "./ComponentExample";

import "../../packages/webfonts/webfonts.scss";
import "../../packages/jokul/src/core/styles/core.scss";
import "../../packages/jokul/src/core/styles/vind.scss";
import "../../packages/jokul/src/styles/styles.scss";
import "./dev-example.scss";

interface Props extends ComponentExampleProps {
    title?: string;
    scrollable?: boolean;
}

export const DevExample: FC<Props> = (props) => {
    return (
        <StrictMode>
            <div className="jkl-dev-example">
                <ComponentExample {...props} />
            </div>
        </StrictMode>
    );
};
