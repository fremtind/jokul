import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import { AccordionExample, knobs } from "./AccordionExample.js";

export default function Example() {
    return <DevExample component={AccordionExample} knobs={knobs} />;
}
