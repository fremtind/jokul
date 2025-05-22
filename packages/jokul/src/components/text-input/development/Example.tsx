import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
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
