import React from "react";
import { DevExample } from "../../../doc-utils";
import { toggleSwitchExampleKnobs, ToggleSwitchExamples } from "./ToggleSwitchExample";
import "../../toggle-switch/toggle-switch.scss";

export default function Client() {
    return <DevExample component={ToggleSwitchExamples} knobs={toggleSwitchExampleKnobs} />;
}
