import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import { CountdownExample, countdownExampleKnobs } from "./CountdownExample.js";

export default function Example() {
    return (
        <DevExample
            component={CountdownExample}
            knobs={countdownExampleKnobs}
        />
    );
}
