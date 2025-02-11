import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { TextInputExample, textInputExampleKnobs } from "./TextInputExample.js";

export default function Example() {
    return (
        <DevExample
            title="TextInput"
            component={TextInputExample}
            knobs={textInputExampleKnobs}
        />
    );
}
