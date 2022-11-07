import React from "react";
import { DevExample } from "../../../doc-utils";
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
