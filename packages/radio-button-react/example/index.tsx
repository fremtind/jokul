import React, { useState } from "react";
import ReactDOM from "react-dom";
import { RadioButtonChoice } from "../src";
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-radio-button/radio-button.min.css";
import "@fremtind/jkl-field-group/field-group.min.css";

initTabListener();

const choices = ["Yes", "No", "I don't know"];
const Demo = () => {
    const [selectedValue, setSelectedValue] = React.useState("Yes");
    const [s, setS] = useState(false);
    return (
        <>
            <button style={{ marginBottom: "5rem" }} onClick={() => setS(!s)}>
                Toggle inlined radio buttons
            </button>
            <RadioButtonChoice
                legend="Do you like radio buttons?"
                name="likesradiobuttons"
                choices={choices}
                inline={s}
                selectedValue={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
            />
        </>
    );
};

ReactDOM.render(<Demo />, document.getElementById("app"));
