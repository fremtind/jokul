import React from "react";
import { ComponentExample, Props as ComponentExampleProps } from "./ComponentExample";

export const DevExample: React.FC<ComponentExampleProps> = ({ knobs, component }) => {
    return (
        <div className="jkl-dev-example">
            <ComponentExample knobs={knobs} component={component} />
        </div>
    );
};
