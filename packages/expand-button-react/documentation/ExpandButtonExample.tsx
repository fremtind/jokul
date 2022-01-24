/* There are no types for core-toggle, so we have to use ts-ignore */
// @ts-ignore: wait for nrk to supply types
import CoreToggle from "@nrk/core-toggle/jsx";
import React, { forwardRef, useState } from "react";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { ExampleComponentProps, CodeExample } from "../../../doc-utils";
import { ExpandButton } from "../src";

const ExpandSection = forwardRef<HTMLElement, { isExpanded: boolean; onToggle: (e: Event) => void }>(
    ({ isExpanded, onToggle }, ref) => (
        <div className="jkl-expand-section">
            <CoreToggle
                ref={ref}
                id="jkl-expand-button-example-content"
                className="jkl-expand-section__content-wrapper"
                hidden={!isExpanded}
                onToggle={onToggle}
            >
                <div className="jkl-expand-section__content">
                    <h3 className="jkl-heading-3 jkl-spacing-xl--bottom">Skjult seksjon</h3>
                    <p className="jkl-portal-paragraph">
                        For at dette skal fungere på en god måte må man huske på <code>aria-controls</code>. Denne
                        komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.
                    </p>
                </div>
            </CoreToggle>
        </div>
    ),
);
ExpandSection.displayName = "ExpandSection";

export const ExpandButtonExample = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [elementRef] = useAnimatedHeight(isExpanded);

    const onToggle = (e: Event) => {
        if (e.defaultPrevented) {
            return;
        }
        setIsExpanded(!isExpanded);
    };

    const expandDirection = choiceValues?.["Ekspander i retning (kun frittstående)"] === "Oppover" ? "up" : "down";

    return (
        <div>
            <p className="jkl-portal-paragraph">
                Noen ganger trenger vi å gi brukerne som ønsker det litt mer informasjon.
            </p>
            {expandDirection === "up" && <ExpandSection ref={elementRef} isExpanded={isExpanded} onToggle={onToggle} />}
            <ExpandButton
                className="jkl-spacing-l--bottom"
                data-for="jkl-expand-button-example-content" // Brukt av CoreToggle for å ta seg av a11y, f. eks. aria-controls
                forceCompact={boolValues?.["Compact"]}
                expandDirection={expandDirection}
                isExpanded={isExpanded}
            >
                {isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}
            </ExpandButton>
            <p className="jkl-body jkl-spacing-l--bottom">
                Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke
                er direkte under ExpandButton.
            </p>
            {expandDirection === "down" && (
                <ExpandSection ref={elementRef} isExpanded={isExpanded} onToggle={onToggle} />
            )}
        </div>
    );
};

export default ExpandButtonExample;

export const expandButtonExampleCode: CodeExample = ({ boolValues, choiceValues }) => `
const [isExpanded, setIsExpanded] = useState(false);
const [elementRef] = useAnimatedHeight(isExpanded);

const onToggle = (e: Event) => {
    if (e.defaultPrevented) {
        return;
    }
    setIsExpanded(!isExpanded);
};

return (
    <div>
        <ExpandButton
            className="jkl-spacing-l--bottom"
            data-for="jkl-expand-button-example-content" // Brukt av CoreToggle for å ta seg av a11y, f. eks. aria-controls
            forceCompact={${boolValues?.["Compact"]}}
            expandDirection="${choiceValues?.["Ekspander i retning (kun frittstående)"] === "Oppover" ? "up" : "down"}"
            isExpanded={isExpanded}
        >
            {isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}
        </ExpandButton>
        <p className="jkl-body jkl-spacing-l--bottom">
            Jeg er ikke styrt av ExpandButton. Jeg illustrerer muligheten for å kontrollere deler av siden som ikke
            er direkte under ExpandButton.
        </p>
        <div className="jkl-expand-section">
            <CoreToggle
                ref={elementRef}
                id="jkl-expand-button-example-content"
                className="jkl-expand-section__content-wrapper"
                hidden={!isExpanded}
                onToggle={onToggle}
            >
                <div className="jkl-expand-section__content">
                    <h3 className="jkl-heading-3 jkl-spacing-xl--bottom">Skjult seksjon</h3>
                    <p className="jkl-portal-paragraph">
                        For at dette skal fungere på en god måte må man huske på <code>aria-controls</code>. Denne
                        komponenten kan være nyttig i for eksempel ekspanderbare tabellrader.
                    </p>
                </div>
            </CoreToggle>
        </div>
    </div>
);
`;
