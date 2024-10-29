import React from "react";
import { DevExample } from "../../../doc-utils";
import {
    AccordionExample,
    accordionExampleCode,
    accordionExampleKnobs,
} from "./AccordionExample";
import "../../accordion/accordion.scss";

export default function Example() {
    return (
        <DevExample
            component={AccordionExample}
            knobs={accordionExampleKnobs}
            codeExample={accordionExampleCode}
        />
    );
}
