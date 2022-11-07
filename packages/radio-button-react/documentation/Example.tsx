import React from "react";
import { DevExample } from "../../../doc-utils";
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
