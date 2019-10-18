import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ActionTextField } from "../src";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
import "@fremtind/jkl-action-text-field/action-text-field.min.css";

const App = () => {
    const [value, setValue] = useState("");

    return (
        <>
            <ActionTextField iconType="delete" label="test" onClick={() => console.log("hello")} />
            <ActionTextField iconType="edit" label="test" onClick={() => {}} />
            <ActionTextField iconType="search" label="test" onClick={() => {}} />
            <ActionTextField
                iconType="clear"
                label="test"
                value={value}
                onClick={() => setValue("")}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
