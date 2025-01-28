import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { AccordionExample, knobs } from "./AccordionExample.js";

export default function Example() {
    return <DevExample component={AccordionExample} knobs={knobs} />;
}
