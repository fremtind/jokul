import React from "react";
import ReactDOM from "react-dom";
import { ToggleSwitch } from "../src";
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-toggle-switch/toggle-switch.min.css";
import "@fremtind/jkl-core/core.min.css";

initTabListener();

const App = () => {
    return (
        <div style={{ margin: "36px", padding: "36px", background: "#fafafa" }}>
            <div style={{ margin: "20px" }}>
                <ToggleSwitch defaultChecked={true}>GPS</ToggleSwitch>
            </div>
            <div style={{ margin: "20px" }}>
                <ToggleSwitch>Glosnas</ToggleSwitch>
            </div>
        </div>
    );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
