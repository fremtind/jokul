import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { toggleSwitchExampleKnobs, ToggleSwitchExamples } from "./ToggleSwitchExample";

export default function Example() {
    return <DevExample component={ToggleSwitchExamples} knobs={toggleSwitchExampleKnobs} />;
}
