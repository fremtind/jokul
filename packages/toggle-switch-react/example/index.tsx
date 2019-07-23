import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ToggleSwitch } from "../src";
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-toggle-switch/toggle-switch.min.css";
import "@fremtind/jkl-core/core.min.css";

initTabListener();

const App = () => {
    const [gpsIsOn, setGpsIsOn] = useState(true);
    const [glonassIsOn, setGlonassIsOn] = useState(false);
    return (
        <div style={{ margin: "36px", padding: "36px", background: "#fafafa" }}>
            <div style={{ margin: "20px" }}>
                <ToggleSwitch defaultChecked={gpsIsOn} onChange={setGpsIsOn}>
                    GPS
                </ToggleSwitch>
            </div>
            <div style={{ margin: "20px" }}>
                <ToggleSwitch defaultChecked={glonassIsOn} onChange={setGlonassIsOn}>
                    Glonass
                </ToggleSwitch>
            </div>
        </div>
    );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
