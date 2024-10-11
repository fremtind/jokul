import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { ExpanderExample } from "./ExpanderExample";
import { expandExamplesKnobs } from "./ExpandExamples";
import { ExpandSectionExample } from "./ExpandSectionExample";

export default function Example() {
    return (
        <>
            <DevExample title="ExpandSection" component={ExpandSectionExample} knobs={expandExamplesKnobs} />
            <DevExample title="ExpandButton" component={ExpanderExample} knobs={expandExamplesKnobs} />
        </>
    );
}
