import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-toggle-switch/toggle-switch.min.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ToggleSwitch } from "../src";

initTabListener();

const App = () => {
    const [gpsDummySwitch, setGpsDummySwitch] = useState(true);
    const [gpsIsOn, setGpsIsOn] = useState(false);
    const [switchIsOn, setSwitchIsOn] = useState(false);
    const [switch2IsOn, setSwitch2IsOn] = useState(true);
    const [glonassIsOn, setGlonassIsOn] = useState(false);
    const [glonassDummySwitch, setGlonassDummySwitch] = useState(true);
    return (
        <>
            <div style={{ margin: "36px", padding: "36px", backgroundColor: "#fafafa" }}>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch checked={gpsDummySwitch} onChange={() => setGpsDummySwitch(!gpsDummySwitch)}>
                        GPS
                    </ToggleSwitch>
                </div>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch checked={switch2IsOn} onChange={() => setSwitch2IsOn(!switch2IsOn)} disabled>
                        Disabled Switch (On)
                    </ToggleSwitch>
                </div>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch checked={switchIsOn} onChange={() => setSwitchIsOn(!switchIsOn)} disabled>
                        Disabled Switch (Off)
                    </ToggleSwitch>
                </div>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch checked={glonassIsOn} onChange={() => setGlonassIsOn(!glonassIsOn)}>
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
            <div style={{ margin: "36px", padding: "36px", backgroundColor: "#000000" }}>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch checked={gpsIsOn} onChange={() => setGpsIsOn(!gpsIsOn)} inverted>
                        GPS
                    </ToggleSwitch>
                </div>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch checked={switch2IsOn} onChange={() => setSwitch2IsOn(!switch2IsOn)} disabled inverted>
                        Disabled Switch (On)
                    </ToggleSwitch>
                </div>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch checked={switchIsOn} onChange={() => setSwitchIsOn(!switchIsOn)} disabled inverted>
                        Disabled Switch (Off)
                    </ToggleSwitch>
                </div>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch
                        checked={glonassDummySwitch}
                        onChange={() => setGlonassDummySwitch(!glonassDummySwitch)}
                        inverted
                    >
                        Glonass
                    </ToggleSwitch>
                </div>

                {gpsIsOn && (
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/NAVSTAR_GPS_logo.png/260px-NAVSTAR_GPS_logo.png"
                        alt="gps"
                    />
                )}
            </div>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
