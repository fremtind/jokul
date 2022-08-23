import React from "react";
import { useElementDimensions } from "../src/useElementDimensions";
import "./element-dimensions-example.scss";

export const ElementDimensionsExample = () => {
    const [elementRef, dimensions] = useElementDimensions<HTMLDivElement>(250);

    return (
        <div className="example-div" ref={elementRef}>
            <dl>
                <dt>Høyde</dt>
                <dd>{dimensions.height}</dd>
                <dt>Bredde</dt>
                <dd>{dimensions.width}</dd>
            </dl>
        </div>
    );
};

export const elementDimensionsExampleCode = `
const [elementRef, dimensions] = useElementDimensions<HTMLDivElement>(250);

return (
    <div ref={elementRef}>
        <dl>
            <dt>Høyde</dt>
            <dd>{dimensions.height}</dd>
            <dt>Bredde</dt>
            <dd>{dimensions.width}</dd>
        </dl>
    </div>
);
`;
