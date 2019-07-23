import "@fremtind/jkl-checkbox/checkbox.css";
import "@fremtind/jkl-core/core.css";
import React from "react";
import ReactDOM from "react-dom";
import { Checkbox } from "../src";

const App = () => (
    <>
        <Checkbox>I am checkbox!</Checkbox>
        <Checkbox>Am I?</Checkbox>
        <Checkbox defaultChecked={true}>I am a checked checkbox!</Checkbox>
        <div style={{ display: "flex", flexFlow: "column", marginTop: "5rem" }}>
            <Checkbox onChange={(val) => console.log(val)}>I am checkbox</Checkbox>
            <Checkbox onChange={(val) => console.log(val)}>Do you like mulitple choices?</Checkbox>
        </div>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
