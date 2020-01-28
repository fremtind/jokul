import React, { useState } from "react";
import { Select, NativeSelect } from "../src";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import { LabelVariant } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-select/select.min.css";
import "@fremtind/jkl-toggle-switch/toggle-switch.min.css";
import "./index.scss";

const Example = () => {
    const valuePairs = [
        { value: "firstvalue", label: "Value 1" },
        { value: "secondvalue", label: "Value 2" },
    ];
    const years = [...Array(120)].map((_, i) => (i + 1900).toString()); // 1900 - 2019

    const [valuePair, setValuePair] = useState<string>();
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

    return (
        <section className={"example-page " + (!darkMode ? "example-page--light-mode" : "example-page--dark-mode")}>
            <fieldset className="example-page__controls">
                <ToggleSwitch className={"toggle-switch"} inverted={darkMode} onClick={() => setDarkMode(!darkMode)}>
                    Dark Mode
                </ToggleSwitch>
                <ToggleSwitch className={"toggle-switch"} inverted={darkMode} onClick={() => setHasError(!hasError)}>
                    Vis feilmelding
                </ToggleSwitch>
                <ToggleSwitch className={"toggle-switch"} inverted={darkMode} onClick={() => setIsCompact(!isCompact)}>
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

            <Select
                inline
                forceCompact={isCompact}
                variant={variant}
                label="Select"
                items={years}
                value="1986"
                helpLabel="Med strengverdier"
                errorLabel={hasError ? "Beskrivende feilmelding" : undefined}
                className="jkl-spacing--all-2"
            />
            <Select
                inline
                forceCompact={isCompact}
                variant={variant}
                label="Select"
                defaultPrompt="Velg et alternativ"
                items={valuePairs}
                onChange={setValuePair}
                value={valuePair}
                helpLabel="Med verdipar"
                errorLabel={hasError ? "Beskrivende feilmelding" : undefined}
                className="jkl-spacing--all-2"
            />

            <NativeSelect
                inline
                forceCompact={isCompact}
                variant={variant}
                label="NativeSelect"
                items={years}
                value="1986"
                helpLabel="Med strengverdier"
                errorLabel={hasError ? "Beskrivende feilmelding" : undefined}
                className="jkl-spacing--all-2"
            />
            <NativeSelect
                inline
                forceCompact={isCompact}
                variant={variant}
                label="NativeSelect"
                items={valuePairs}
                onChange={(e) => setValuePair(e.target.value)}
                value={valuePair}
                helpLabel="Med verdipar"
                errorLabel={hasError ? "Beskrivende feilmelding" : undefined}
                className="jkl-spacing--all-2"
            />
        </section>
    );
};

export default Example;
