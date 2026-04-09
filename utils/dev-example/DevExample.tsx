import React, { StrictMode, type FC } from "react";
import {
    ComponentExample,
    type Props as ComponentExampleProps,
} from "./ComponentExample.js";

import "../../packages/jokul/src/styles/base.scss";
import "../../packages/jokul/src/styles/components.scss";
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
