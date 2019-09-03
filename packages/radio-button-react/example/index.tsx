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
    const [selectedValue, setSelectedValue] = React.useState();
    const [inline, setInline] = useState(false);
    const [invalid, setInvalid] = useState("");
    return (
        <>
            <button style={{ marginBottom: "5rem" }} onClick={() => setInline(!inline)}>
                Toggle inlined radio buttons
            </button>
            <button
                style={{ marginBottom: "5rem" }}
                onClick={() => setInvalid(invalid === "" ? "Hmm... this is not right" : "")}
            >
                Toggle invalid
            </button>
            <RadioButtonChoice
                legend="Do you like radio buttons?"
                name="likesradiobuttons"
                choices={choices}
                inline={inline}
                selectedValue={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                helpLabel="Who dosent like radio buttons?"
                errorLabel={invalid}
            />
        </>
    );
};

ReactDOM.render(<Demo />, document.getElementById("app"));
