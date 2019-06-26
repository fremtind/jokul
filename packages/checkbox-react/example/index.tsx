import "@fremtind/jkl-checkbox/checkbox.css";
import "@fremtind/jkl-core/build/css/core.css";
import React from "react";
import ReactDOM from "react-dom";
import { Checkbox } from "../src";

const App = () => (
    <>
        <Checkbox>I am checkbox!</Checkbox>
        <Checkbox>Am I?</Checkbox>
        <Checkbox defaultChecked={true}>I am a checked checkbox!</Checkbox>
        <div style={{ display: "flex", flexFlow: "column", marginTop: "5rem" }}>
            <Checkbox>I am checkbox</Checkbox>
            <Checkbox>Do you like mulitple choices?</Checkbox>
        </div>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
