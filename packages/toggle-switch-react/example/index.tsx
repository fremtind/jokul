import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-toggle-switch/toggle-switch.min.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ToggleSwitch } from "../src";

initTabListener();

const App = () => {
    const [gpsIsOn, setGpsIsOn] = useState(true);
    const [glonassIsOn, setGlonassIsOn] = useState(false);
    return (
        <div style={{ margin: "36px", padding: "36px", background: "#fafafa" }}>
            <div style={{ margin: "20px" }}>
                <ToggleSwitch checked={gpsIsOn} onChange={setGpsIsOn}>
                    GPS
                </ToggleSwitch>
            </div>
            <div style={{ margin: "20px" }}>
                <ToggleSwitch checked={glonassIsOn} onChange={setGlonassIsOn}>
                    Glonass
                </ToggleSwitch>
            </div>

            {glonassIsOn && (
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Glonass_logo.png/220px-Glonass_logo.png"
                    alt="glonass"
                />
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
