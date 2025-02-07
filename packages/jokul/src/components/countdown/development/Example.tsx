import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { CountdownExample, countdownExampleKnobs } from "./CountdownExample.js";

export default function Example() {
    return (
        <DevExample
            component={CountdownExample}
            knobs={countdownExampleKnobs}
        />
    );
}
