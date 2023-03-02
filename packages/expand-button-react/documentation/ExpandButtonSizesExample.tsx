import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import React, { useState } from "react";
import { ExampleComponentProps, CodeExample, ExampleKnobsProps } from "../../../doc-utils";
import { ExpandButton } from "../src";

export const expandButtonSizesExampleKnobs: ExampleKnobsProps = {
    choiceProps: [{ name: "Variant", values: ["heading-3", "heading-2", "heading-1"], defaultValue: 1 }],
};

export const ExpandButtonSizesExample = ({ choiceValues }: ExampleComponentProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [elementRef] = useAnimatedHeight<HTMLDivElement>(isExpanded);
    const expandButtonId = "jkl-example-expand-button-2";
    const expandedContentId = "jkl-example-expand-content-2";

    const onClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <ExpandButton
                aria-controls={expandedContentId}
                id={expandButtonId}
                className={`jkl-spacing-l--bottom ${
                    choiceValues?.["Variant"] ? `jkl-${choiceValues?.["Variant"]}` : ""
                }`}
                expandDirection="down"
                isExpanded={isExpanded}
                onClick={onClick}
            >
                {isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}
            </ExpandButton>
            <div
                ref={elementRef}
                className="jkl-expand-section__content-wrapper"
                role="group"
                aria-labelledby={expandButtonId}
                id={expandedContentId}
                hidden={!isExpanded}
            >
                <div className="jkl-expand-section__content">
                    <p className="jkl-heading-4 jkl-spacing-xl--bottom">Skjult seksjon</p>
                    <p className="jkl-spacing-l--bottom">
                        For at dette skal fungere på en god måte må man huske på <code>aria-controls</code>. Denne
                        komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.
                    </p>
                </div>
            </div>
        </div>
    );
};

export const expandButtonSizesExampleCode: CodeExample = ({
    choiceValues,
}) => `const [isExpanded, setIsExpanded] = useState(false);
const [elementRef] = useAnimatedHeight<HTMLDivElement>(isExpanded);
const expandButtonId = "jkl-example-expand-button-2";
const expandedContentId = "jkl-example-expand-content-2";

const onClick = () => {
  setIsExpanded(!isExpanded);
};

return (
  <div>
    <ExpandButton
      aria-controls={expandedContentId}
      id={expandButtonId}
      className={\`jkl-spacing-l--bottom ${choiceValues?.["Variant"] ? `jkl-${choiceValues?.["Variant"]}` : ""}\`}
      expandDirection="down"
      isExpanded={isExpanded}
      onClick={onClick}
    >
      {isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}
    </ExpandButton>
    <div
      ref={elementRef}
      className="jkl-expand-section__content-wrapper"
      role="group"
      aria-labelledby={expandButtonId}
      id={expandedContentId}
      hidden={!isExpanded}
    >
      <div className="jkl-expand-section__content">
        <p className="jkl-heading-4 jkl-spacing-xl--bottom">Skjult seksjon</p>
        <p className="jkl-spacing-l--bottom">
          For at dette skal fungere på en god måte må man huske på <code>aria-controls</code>. Denne
          komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.
        </p>
      </div>
    </div>
  </div>
);`;
