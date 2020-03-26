import React from "react";
import "@fremtind/jkl-accordion/accordion.css";

import { Accordion, AccordionItem } from "../src";

export const Example = () => (
    <Accordion>
        <AccordionItem title="Accordion First item">
            Now let‘s use some more properties. Consider a list of 6 items, all with a fixed dimensions in a matter of
            aesthetics but they could be auto-sized. We want them to be evenly and nicely distributed on the horizontal
            axis so that when we resize the browser, everything is fine (without media queries!).
        </AccordionItem>
        <AccordionItem title="Second item">
            Now let‘s use some more properties. Consider a list of 6 items, all with a fixed dimensions in a matter of
            aesthetics but they could be auto-sized. We want them to be evenly and nicely distributed on the horizontal
            axis so that when we resize the browser, everything is fine (without media queries!).
        </AccordionItem>
    </Accordion>
);
