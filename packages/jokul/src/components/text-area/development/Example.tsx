import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
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
