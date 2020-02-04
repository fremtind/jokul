import React, { useState } from "react";
import { ToggleSwitch } from "../src";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-toggle-switch/toggle-switch.min.css";

const Example = () => {
    const [gpsDummySwitch, setGpsDummySwitch] = useState(true);
    const [gpsIsOn, setGpsIsOn] = useState(false);
    const [switchIsOn, setSwitchIsOn] = useState(false);
    const [switch2IsOn, setSwitch2IsOn] = useState(true);
    const [glonassIsOn, setGlonassIsOn] = useState(false);
    const [glonassDummySwitch, setGlonassDummySwitch] = useState(true);
    return (
        <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
            <div style={{ margin: "36px", padding: "36px", backgroundColor: "#fafafa" }}>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch pressed={gpsDummySwitch} onClick={() => setGpsDummySwitch(!gpsDummySwitch)}>
                        GPS
                    </ToggleSwitch>
                </div>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch pressed={switch2IsOn} onClick={() => setSwitch2IsOn(!switch2IsOn)} disabled>
                        Disabled Switch (On)
                    </ToggleSwitch>
                </div>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch
                        pressed={switchIsOn}
                        onClick={() => setSwitchIsOn(!switchIsOn)}
                        disabled
                        helpLabel="Reason switch is disabled"
                    >
                        Disabled Switch (Off)
                    </ToggleSwitch>
                </div>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch pressed={glonassIsOn} onClick={() => setGlonassIsOn(!glonassIsOn)}>
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
            <div style={{ margin: "36px", padding: "36px", backgroundColor: "#000000", color: "#ffffff" }}>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch pressed={gpsIsOn} onClick={() => setGpsIsOn(!gpsIsOn)} inverted>
                        GPS
                    </ToggleSwitch>
                </div>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch
                        pressed={switch2IsOn}
                        onClick={() => setSwitch2IsOn(!switch2IsOn)}
                        disabled
                        inverted
                        helpLabel="Reason switch is disabled"
                    >
                        Disabled Switch (On)
                    </ToggleSwitch>
                </div>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch pressed={switchIsOn} onClick={() => setSwitchIsOn(!switchIsOn)} disabled inverted>
                        Disabled Switch (Off)
                    </ToggleSwitch>
                </div>
                <div style={{ margin: "20px" }}>
                    <ToggleSwitch
                        pressed={glonassDummySwitch}
                        onClick={() => setGlonassDummySwitch(!glonassDummySwitch)}
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
        </section>
    );
};

export default Example;
