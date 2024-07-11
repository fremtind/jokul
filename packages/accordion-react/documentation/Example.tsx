import React from "react";
import { DevExample } from "../../../utils/documentation/DevExample";
import "../../../utils/documentation/dev-example.scss";
import { AccordionExample, accordionExampleCode, accordionExampleKnobs } from "./AccordionExample";

export default function Example() {
    return <DevExample component={AccordionExample} knobs={accordionExampleKnobs} codeExample={accordionExampleCode} />;
}
