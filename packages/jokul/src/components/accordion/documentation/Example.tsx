import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { AccordionExample, knobs } from "./AccordionExample";

export default function Example() {
    return <DevExample component={AccordionExample} knobs={knobs} />;
}
