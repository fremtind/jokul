import React from "react";
import { Accordion, AccordionItem } from "@fremtind/jkl-accordion-react";

export function AccordionExample() {
    return (
        <Accordion>
            <AccordionItem title="Bak denne er det innhold">The spectacle before us was indeed sublime.</AccordionItem>
            <AccordionItem title="Kan også være åpen som standard" startExpanded={true}>
                For half-an-hour we were muffled in a cold, damp mist, and total darkness, and had begun to think of
                going indoors when, all at once, the car burst into the pure and starlit region of the upper air.
            </AccordionItem>
            <AccordionItem title="Bak denne er det også innhold">
                The unwonted sadness of her tone reminded me of her devoted life, and I turned towards her with new
                interest and sympathy.
            </AccordionItem>
        </Accordion>
    );
}
