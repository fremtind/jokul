import React from "react";
import { DevExample } from "../../../doc-utils";
import { InputGroupExample, inputGroupExampleCode, inputGroupExampleKnobs } from "./InputGroupExample";
import "../../input-group/input-group.scss";

export default function Example() {
    return (
        <DevExample component={InputGroupExample} codeExample={inputGroupExampleCode} knobs={inputGroupExampleKnobs} />
    );
}
