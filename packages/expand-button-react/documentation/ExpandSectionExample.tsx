import React, { useState } from "react";
import { ExampleComponentProps, CodeExample } from "../../../doc-utils";
import { ExpandSection } from "../src";

export const ExpandSectionExample = ({ boolValues }: ExampleComponentProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div>
            <p className="jkl-portal-paragraph">
                Noen ganger trenger vi å gi brukerne som ønsker det litt mer informasjon.
            </p>
            <ExpandSection
                forceCompact={boolValues?.["Compact"]}
                title={isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}
                onClick={(_, expanded) => {
                    setIsExpanded(expanded);
                }}
            >
                <h3 className="jkl-heading-3 jkl-spacing-xl--bottom">Skjult seksjon</h3>
                <p className="jkl-portal-paragraph">
                    Her kommer det masse informasjon som er relevant, men ikke så relevant at vi alltid vil vise det.
                </p>
                <p className="jkl-portal-paragraph">
                    Vi kunne kanskje brukt en Accordion, men vi har ikke <em>flere</em> ting vi vil strukturere på denne
                    måten. Det ser litt rart ut med ett AccordionItem, så da bruker vi heller en ExpandButton
                </p>
            </ExpandSection>
        </div>
    );
};

export default ExpandSectionExample;

export const expandSectionExampleCode: CodeExample = ({ boolValues }) => `
const [isExpanded, setIsExpanded] = useState(false);

return (
    <ExpandSection
        forceCompact={${boolValues?.["Compact"]}}
        title={isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}
        onClick={(e, expanded) => {
            setIsExpanded(expanded);
        }}
    >
        <h3 className="jkl-heading-3 jkl-spacing-xl--bottom">Skjult seksjon</h3>
        <p className="jkl-portal-paragraph">
            Her kommer det masse informasjon som er relevant, men ikke så relevant at vi alltid vil vise
            det.
        </p>
        <p className="jkl-portal-paragraph">
            Vi kunne kanskje brukt en Accordion, men vi har ikke <em>flere</em> ting vi vil strukturere på
            denne måten. Det ser litt rart ut med ett AccordionItem, så da bruker vi heller en ExpandButton
        </p>
    </ExpandSection>
);
`;
