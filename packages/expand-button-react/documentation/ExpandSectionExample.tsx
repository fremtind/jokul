import React, { FC, useState } from "react";
import { ExampleComponentProps, CodeExample } from "../../../doc-utils";
import { ExpandSection } from "../src";

export const ExpandSectionExample: FC<ExampleComponentProps> = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div>
            <p className="jkl-spacing-l--bottom">
                Noen ganger trenger vi å gi brukerne som ønsker det litt mer informasjon.
            </p>
            <ExpandSection
                title={isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}
                onClick={(_, expanded) => {
                    setIsExpanded(expanded);
                }}
            >
                <p className="jkl-heading-4 jkl-spacing-xl--bottom">Skjult seksjon</p>
                <p className="jkl-spacing-l--bottom">
                    Her kommer det masse informasjon som er relevant, men ikke så relevant at vi alltid vil vise det.
                </p>
                <p className="jkl-spacing-l--bottom">
                    Vi kunne kanskje brukt en Accordion, men vi har ikke <em>flere</em> ting vi vil strukturere på denne
                    måten. Det ser litt rart ut med ett AccordionItem, så da bruker vi heller en ExpandButton
                </p>
            </ExpandSection>
        </div>
    );
};

export default ExpandSectionExample;

export const expandSectionExampleCode: CodeExample = () => `
const [isExpanded, setIsExpanded] = useState(false);

return (
    <ExpandSection
        title={isExpanded ? "Skjul seksjonen igjen" : "Vis den skjulte seksjonen"}
        onClick={(e, expanded) => {
            setIsExpanded(expanded);
        }}
    >
        <p className="jkl-heading-4 jkl-spacing-xl--bottom">Skjult seksjon</p>
        <p className="jkl-spacing-l--bottom">
            Her kommer det masse informasjon som er relevant, men ikke så relevant at vi alltid vil vise
            det.
        </p>
        <p className="jkl-spacing-l--bottom">
            Vi kunne kanskje brukt en Accordion, men vi har ikke <em>flere</em> ting vi vil strukturere på
            denne måten. Det ser litt rart ut med ett AccordionItem, så da bruker vi heller en ExpandButton
        </p>
    </ExpandSection>
);
`;
