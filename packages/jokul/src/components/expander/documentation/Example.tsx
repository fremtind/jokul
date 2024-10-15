import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { ExpanderExample, expanderExamplesKnobs } from "./ExpanderExample";
import { ExpandSectionExample } from "./ExpandSectionExample";

export default function Example() {
    return (
        <>
            <DevExample title="ExpandSection" component={ExpandSectionExample} />
            <DevExample title="Expander" component={ExpanderExample} knobs={expanderExamplesKnobs} />
        </>
    );
}
