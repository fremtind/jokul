import React from "react";
import { DevExample } from "../../../doc-utils";
import { ExpandButtonExample } from "./ExpandButtonExample";
import { expandExamplesProps } from "./ExpandExamples";
import { ExpandSectionExample } from "./ExpandSectionExample";
import "../../expand-button/expand-button.scss";
import "../../icons/icons.scss";

export default function Example() {
    return (
        <>
            <DevExample title="ExpandSection" component={ExpandSectionExample} knobs={expandExamplesProps} />
            <DevExample title="ExpandButton" component={ExpandButtonExample} knobs={expandExamplesProps} />
        </>
    );
}
