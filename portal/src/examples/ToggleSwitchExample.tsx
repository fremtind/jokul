import React from "react";
import { Example } from "../components";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import "@fremtind/jkl-toggle-switch/toggle-switch.min.css";

import type from "!raw-loader!@fremtind/jkl-toggle-switch-react/build/ToggleSwitch.d.ts";

const example = `
() => {
    const [gpsIsOn, setGpsIsOn] = React.useState(false);
    
    return (
        <>
            <ToggleSwitch checked={gpsIsOn} onChange={() => setGpsIsOn(!gpsIsOn)}>
                GPS
            </ToggleSwitch>
            <ToggleSwitch checked={!gpsIsOn} onChange={() => setGpsIsOn(!gpsIsOn)}>
                Glosnas
            </ToggleSwitch>
        </>
    );
}`;

const exampleImport = `
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import "@fremtind/jkl-toggle-switch/toggle-switch.min.css";`;

const ToggleSwitchExample = () => (
    <Example exampleComponents={{ ToggleSwitch }} exampleCode={example} type={type} exampleImport={exampleImport} />
);

export default ToggleSwitchExample;
