import React from "react";
import { ComponentExample, Props as ComponentExampleProps } from "./ComponentExample";
import { ResponsiveExample } from "./ResponsiveExample";

interface Props extends ComponentExampleProps {
    responsiveLayout?: boolean;
}

export const DevExample: React.FC<Props> = ({ knobs, component, responsiveLayout = false }) => {
    const C = responsiveLayout ? ResponsiveExample : ComponentExample;

    return (
        <div className="jkl-dev-example">
            <C knobs={knobs} component={component} />
        </div>
    );
};
