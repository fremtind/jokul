import React, { forwardRef, useState } from "react";
import { Expander } from "..";
import { ExampleComponentProps } from "../../../../../../utils/dev-example";
import { useAnimatedHeight } from "../../../hooks";

export const expanderExamplesKnobs = {
    choiceProps: [
        {
            name: "Ekspander i retning",
            values: ["Nedover", "Oppover"],
            defaultValue: 0,
        },
    ],
};

const ExpandSection = forwardRef<HTMLDivElement, { id: string; "aria-labelledby": string; hidden: boolean }>(
    ({ ...rest }, ref) => (
        <div ref={ref} className="jkl-expand-section__content-wrapper" role="group" {...rest}>
            <div className="jkl-expand-section__content">
                <p className="jkl-heading-4 jkl-spacing-xl--bottom">Skjult seksjon</p>
                <p className="jkl-spacing-l--bottom">
                    For at dette skal fungere på en god måte må man huske på <code>aria-controls</code>. Denne
                    komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.
                </p>
            </div>
        </div>
    ),
);
ExpandSection.displayName = "ExpandSection";

export const ExpanderExample = ({ choiceValues }: ExampleComponentProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [elementRef] = useAnimatedHeight<HTMLDivElement>(isExpanded);
    const expandButtonId = "jkl-example-expand-button";
    const expandedContentId = "jkl-example-expand-content";

    const onClick = () => {
        setIsExpanded(!isExpanded);
    };

    const expandDirection = choiceValues?.["Ekspander i retning"] === "Oppover" ? "up" : "down";

    return (
        <div>
            <p className="jkl-spacing-l--bottom">
                Noen ganger trenger vi å gi brukerne som ønsker det litt mer informasjon.
            </p>
            {expandDirection === "up" && (
                <>
                    <ExpandSection
                        ref={elementRef}
                        aria-labelledby={expandButtonId}
                        id={expandedContentId}
                        hidden={!isExpanded}
                    />
                    <p className="jkl-spacing-l--bottom">
                        Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden
                        som ikke er direkte under ExpandButton.
                    </p>
                </>
            )}
            <Expander
                aria-controls={expandedContentId}
                id={expandButtonId}
                className="jkl-spacing-l--bottom"
                expandDirection={expandDirection}
                isExpanded={isExpanded}
                onClick={onClick}
            >
                {isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}
            </Expander>
            {expandDirection === "down" && (
                <>
                    <p className="jkl-spacing-l--bottom">
                        Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden
                        som ikke er direkte under ExpandButton.
                    </p>
                    <ExpandSection
                        ref={elementRef}
                        aria-labelledby={expandButtonId}
                        id={expandedContentId}
                        hidden={!isExpanded}
                    />
                </>
            )}
        </div>
    );
};

export default ExpanderExample;
