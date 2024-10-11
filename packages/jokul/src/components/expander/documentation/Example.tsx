import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { ExpanderExample } from "./ExpanderExample";
import { expandExamplesKnobs } from "./ExpandExamples";
import { ExpandSectionExample } from "./ExpandSectionExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return (
        <>
            <DevExample title="ExpandSection" component={ExpandSectionExample} knobs={expandExamplesKnobs} />
            <DevExample title="ExpandButton" component={ExpanderExample} knobs={expandExamplesKnobs} />
        </>
    );
}
