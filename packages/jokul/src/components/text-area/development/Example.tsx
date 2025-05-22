import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import { TextAreaExample, textAreaExampleKnobs } from "./TextAreaExample.js";

export default function Example() {
    return (
        <DevExample
            title="TextArea"
            component={TextAreaExample}
            knobs={textAreaExampleKnobs}
        />
    );
}
