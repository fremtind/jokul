import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { ExpandButtonExample } from "./ExpandButtonExample";
import { expandExamplesProps } from "./ExpandExamples";
import { ExpandSectionExample } from "./ExpandSectionExample";
import "../../expand-button/expand-button.scss";
import "../../icons/animated-icons.scss";

export default function Example() {
    return (
        <>
            <DevExample title="ExpandSection" component={ExpandSectionExample} knobs={expandExamplesProps} />
            <DevExample title="ExpandButton" component={ExpandButtonExample} knobs={expandExamplesProps} />
        </>
    );
}
