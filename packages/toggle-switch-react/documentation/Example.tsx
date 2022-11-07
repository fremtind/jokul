import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { toggleSwitchCodeExample, toggleSwitchExampleKnobs, ToggleSwitchExamples } from "./ToggleSwitchExample";
import "../../toggle-switch/toggle-switch.scss";

export default function Example() {
    return (
        <DevExample
            component={ToggleSwitchExamples}
            knobs={toggleSwitchExampleKnobs}
            codeExample={toggleSwitchCodeExample}
        />
    );
}
