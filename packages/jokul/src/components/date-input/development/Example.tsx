import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import { DateInputExample, dateInputExampleKnobs } from "./DateInputExample.js";

export default function Example() {
    return (
        <DevExample
            title="DateInput"
            component={DateInputExample}
            knobs={dateInputExampleKnobs}
        />
    );
}
