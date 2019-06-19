import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ToggleSwitch } from "../src";
import "@fremtind/jkl-toggle-switch/toggle-switch.css";

const ToggleSwitchDemo = () => {
    const [value, setValue] = useState("");
    return (
        <>
            <ToggleSwitch label="GPS-sporing" value={value} onChange={(e) => setValue(e.target.value)} />
        </>
    );
};

const mountNode = document.getElementById("app");
ReactDOM.render(<ToggleSwitchDemo />, mountNode);
