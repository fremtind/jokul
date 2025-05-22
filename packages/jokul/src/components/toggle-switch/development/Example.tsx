import React from "react";
import { DevExample } from "utils/dev-example/DevExample.js";
import {
    ToggleSwitchExamples,
    toggleSwitchExampleKnobs,
} from "./ToggleSwitchExample.js";

export default function Example() {
    return (
        <DevExample
            component={ToggleSwitchExamples}
            knobs={toggleSwitchExampleKnobs}
        />
    );
}
