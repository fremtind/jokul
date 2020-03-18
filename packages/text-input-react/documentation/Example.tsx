import React, { ChangeEvent, useState } from "react";
import { TextArea, TextField, ActionTextField, InlineTextField } from "../src";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import { Select } from "@fremtind/jkl-select-react";
import { LabelVariant } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-text-input/text-input.min.css";
import "./index.scss";

const Example = () => {
    const [value, setValue] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isCompact, setIsCompact] = useState(false);
    const [variant, setVariant] = useState<LabelVariant | undefined>("medium");
    const typecheckAndSetVariant = (val: string) => {
        if (val === "large" || val === "medium" || val === "small") {
            setVariant(val);
        } else {
            setVariant(undefined);
        }
    };
    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setValue(event.target.value);
    }

    return (
        <section className={"example-page " + (!darkMode ? "example-page--light-mode" : "example-page--dark-mode")}>
            <fieldset className="example-page__controls">
                <ToggleSwitch
                    className={"toggle-switch"}
                    pressed={darkMode}
                    inverted={darkMode}
                    onClick={() => setDarkMode(!darkMode)}
                >
                    Dark Mode
                </ToggleSwitch>
                <ToggleSwitch
                    className={"toggle-switch"}
                    pressed={hasError}
                    inverted={darkMode}
                    onClick={() => setHasError(!hasError)}
                >
                    Vis feilmelding
                </ToggleSwitch>
                <ToggleSwitch
                    className={"toggle-switch"}
                    pressed={isCompact}
                    inverted={darkMode}
                    onClick={() => setIsCompact(!isCompact)}
                >
                    Kompakt variant
                </ToggleSwitch>
                <Select
                    forceCompact
                    variant="small"
                    label="Etikettvariant"
                    items={["large", "medium", "small"]}
                    onChange={typecheckAndSetVariant}
                    value={variant}
                />
            </fieldset>
            <div className="side-by-side jkl-spacing--bottom-2">
                <TextArea
                    label="Din livshistorie"
                    value={value}
                    onChange={handleChange}
                    placeholder="Dette"
                    autoExpand
                    variant={variant}
                    forceCompact={isCompact}
                />
            </div>
        </section>
    );
};
export default Example;
