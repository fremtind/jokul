import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import ExpanderExample, { expanderExamplesKnobs } from "./ExpanderExample.js";
import ExpandSectionExample from "./ExpandSectionExample.js";

export default function Example() {
    return (
        <>
            <DevExample title="ExpandSection" component={ExpandSectionExample} />
            <DevExample title="Expander" component={ExpanderExample} knobs={expanderExamplesKnobs} />
        </>
    );
}
