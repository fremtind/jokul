import { DevExample } from "utils/dev-example/DevExample.js";
import React from "react";
import {
    toggleSwitchExampleKnobs,
    ToggleSwitchExamples,
} from "./ToggleSwitchExample.js";

export default function Example() {
    return (
        <DevExample
            component={ToggleSwitchExamples}
            knobs={toggleSwitchExampleKnobs}
        />
    );
}
