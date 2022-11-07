import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { RadioButtonExample, radioButtonExampleCode, radioButtonExampleKnobs } from "./RadioButtonExample";
import "../../radio-button/radio-button.scss";

export default function Example() {
    return (
        <DevExample
            component={RadioButtonExample}
            knobs={radioButtonExampleKnobs}
            codeExample={radioButtonExampleCode}
        />
    );
}
