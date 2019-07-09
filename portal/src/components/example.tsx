import React, { ReactNode } from "react";
import { PrismHighlightedCode } from "./PrismHighlightedCode";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";

interface Props {
    exampleComponent: ReactNode;
    exampleCode: string;
}

export function Example({ exampleComponent, exampleCode }: Props) {
    return (
        <div>
            <div className="component-example">{exampleComponent}</div>
            <Accordion>
                <AccordionItem title="Kode">
                    <PrismHighlightedCode>{exampleCode}</PrismHighlightedCode>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
