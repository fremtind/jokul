import React from "react";

// Import utils for showing example
import { DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { AccordionExample } from "./AccordionExample";
import "@fremtind/jkl-accordion/accordion.css";

export default function Client() {
    return <DevExample component={AccordionExample} />;
}
