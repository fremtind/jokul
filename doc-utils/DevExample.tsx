import React, { FC } from "react";
import { ComponentExample, Props as ComponentExampleProps } from "./ComponentExample";
import { ResponsiveExample } from "./ResponsiveExample";

interface Props extends ComponentExampleProps {
    title?: string;
    responsiveLayout?: boolean;
}

export const DevExample: FC<Props> = ({ title, knobs, component, responsiveLayout = false }) => {
    const C = responsiveLayout ? ResponsiveExample : ComponentExample;

    return (
        <div className="jkl-dev-example">
            <C title={title} knobs={knobs} component={component} />
        </div>
    );
};
