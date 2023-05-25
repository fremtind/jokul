import type { CodeExample } from "doc-utils";
import React, { type FC, useState } from "react";
import { useAnimatedHeightBetween } from "../src";
import "./animation-example.scss";

const AnimationBetweenExample: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [animationRef] = useAnimatedHeightBetween(isExpanded, { timing: "expressive" });

    return (
        <section ref={animationRef} className="animation-between-example">
            <p className="jkl-heading-2">Lorem Ipsum</p>
            <p className="jkl-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
            </p>
            <p className="jkl-body">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged.
            </p>
            <p className="jkl-body">
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button
                className="jkl-button jkl-button--secondary"
                data-density="compact"
                onClick={() => setIsExpanded((prev) => !prev)}
            >{`Vis ${isExpanded ? "mindre" : "mer"}`}</button>
        </section>
    );
};

export default AnimationBetweenExample;

export const animationBetweenExampleCode: CodeExample = `
const [isExpanded, setIsExpanded] = useState(false);
const [animationRef] = useAnimatedHeightBetween(isExpanded, { timing: "expressive" });

return (
    <section ref={animationRef} className="animation-between-example">
        <p className="jkl-heading-2">Lorem Ipsum</p>
        <p className="jkl-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
        </p>
        <p className="jkl-body">
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
        </p>
        <p className="jkl-body">
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <button
            className="jkl-button jkl-button--secondary"
            data-density="compact"
            onClick={() => setIsExpanded((prev) => !prev)}
        >{\`Vis \${isExpanded ? "mindre" : "mer"}\`}</button>
    </section>
);
`;
