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
    const [variant, setVariant] = useState<"secondary" | "small" | undefined>(undefined);
    return (
        <>
            <div style={{ marginBottom: "5rem" }}>
                <button style={{ margin: "1.5em" }} onClick={() => setInline(!inline)}>
                    Toggle inlined radio buttons
                </button>
                <button
                    style={{ margin: ".5rem" }}
                    onClick={() => setInvalid(invalid === "" ? "Hmm... this is not right" : "")}
                >
                    Toggle invalid
                </button>
                <label style={{ margin: ".5rem" }}>
                    {`Choose variant: `}
                    <select onChange={(e) => setVariant(e.target.value)} value={variant}>
                        <option value={undefined}>Normal</option>
                        <option value="secondary">Secondary</option>
                        <option value="small">Small</option>
                    </select>
                </label>
            </div>

            <RadioButtonChoice
                legend="Do you like radio buttons?"
                name="likesradiobuttons"
                choices={choices}
                inline={inline}
                selectedValue={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                helpLabel="Who dosent like radio buttons?"
                errorLabel={invalid}
                variant={variant}
            />
        </>
    );
};

ReactDOM.render(<Demo />, document.getElementById("app"));
