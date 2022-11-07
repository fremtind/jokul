import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { AccordionExample, accordionExampleCode, accordionExampleKnobs } from "./AccordionExample";
import "../../accordion/accordion.scss";

export default function Example() {
    return <DevExample component={AccordionExample} knobs={accordionExampleKnobs} codeExample={accordionExampleCode} />;
}
