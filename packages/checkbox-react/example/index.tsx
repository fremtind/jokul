import "@fremtind/jkl-checkbox/checkbox.css";
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.css";
import React from "react";
import ReactDOM from "react-dom";
import { Checkbox } from "../src";

initTabListener();

const App = () => {
    const [isCool, changeCoolness] = React.useState(false);
    return (
        <>
            <Checkbox>I am checkbox!</Checkbox>
            <Checkbox>Am I?</Checkbox>
            <Checkbox checked={true}>I will never change</Checkbox>
            <Checkbox checked={isCool} onChange={() => changeCoolness(!isCool)}>
                I am {isCool ? "cool" : "not cool"}{" "}
            </Checkbox>

            <div style={{ display: "flex", flexFlow: "column", marginTop: "5rem" }}>
                <Checkbox>I am checkbox</Checkbox>
                <Checkbox>Do you like mulitple choices?</Checkbox>
            </div>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
