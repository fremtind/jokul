import React, { useState } from "react";
import { RadioButtons } from "../src";
import { LabelVariant } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-radio-button/radio-button.min.css";
import "@fremtind/jkl-field-group/field-group.min.css";

const choices = ["Yes", "No", "I don't know"];

const Example = () => {
    const [selectedValue, setSelectedValue] = React.useState();
    const [inline, setInline] = useState(false);
    const [invalid, setInvalid] = useState("");
    const [variant, setVariant] = useState<LabelVariant | undefined>("medium");
    const typecheckAndSetVariant = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        if (val === "large" || val === "medium" || val === "small") {
            setVariant(val);
        } else {
            setVariant(undefined);
        }
    };

    return (
        <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
            <div className="jkl-spacing--bottom-3">
                <button className="jkl-spacing--right-1" onClick={() => setInline(!inline)}>
                    Toggle inlined radio buttons
                </button>
                <button
                    className="jkl-spacing--right-1"
                    onClick={() => setInvalid(invalid === "" ? "Hmm... this is not right" : "")}
                >
                    Toggle invalid
                </button>
                <label>
                    {`Choose variant: `}
                    {/* eslint-disable jsx-a11y/no-onchange */}
                    <select onChange={typecheckAndSetVariant} value={variant}>
                        <option value="large">Large</option>
                        <option value="medium">Medium</option>
                        <option value="small">Small</option>
                    </select>
                    {/* eslint-enable jsx-a11y/no-onchange */}
                </label>
            </div>

            <RadioButtons
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
        </section>
    );
};

export default Example;
