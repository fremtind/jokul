import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { AccordionExample } from "./AccordionExample";
import "@fremtind/jkl-accordion/accordion.css";

const mountNode = document.getElementById("app");
renderExample(
    <DevExample
        component={AccordionExample}
        knobs={{
            boolProps: ["Invertert"],
        }}
    />,
    mountNode,
);
