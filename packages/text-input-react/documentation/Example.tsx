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
                <ToggleSwitch className={"toggle-switch"} inverted={darkMode} onChange={() => setDarkMode(!darkMode)}>
                    Dark Mode
                </ToggleSwitch>
                <ToggleSwitch className={"toggle-switch"} inverted={darkMode} onChange={() => setHasError(!hasError)}>
                    Vis feilmelding
                </ToggleSwitch>
                <ToggleSwitch className={"toggle-switch"} inverted={darkMode} onChange={() => setIsCompact(!isCompact)}>
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
                <ActionTextField
                    forceCompact={isCompact}
                    action={{
                        icon: "clear",
                        label: "Utfør nullstilling",
                        onClick: () => setValue(""),
                    }}
                    label="Nullstill felt"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <ActionTextField
                    forceCompact={isCompact}
                    action={{
                        icon: "search",
                        label: "Skriv til konsoll",
                        onClick: console.log,
                    }}
                    label="Skriv til konsoll"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div className="side-by-side jkl-spacing--bottom-2">
                <p className="jkl-small">
                    Jeg tjener{" "}
                    <InlineTextField type="number" maxLength={5} label="kronebeløp" forceCompact={isCompact} /> kroner i
                    måneden.
                </p>
                <p className="jkl-body">
                    Jeg tjener{" "}
                    <InlineTextField invalid type="number" maxLength={5} label="kronebeløp" forceCompact={isCompact} />{" "}
                    kroner i måneden.
                </p>
            </div>
            <div className="side-by-side jkl-spacing--bottom-2">
                <TextField
                    label="Fornavn"
                    value={value}
                    onChange={handleChange}
                    placeholder={"f.eks. Ola"}
                    variant="small"
                    helpLabel="La oss se..."
                    forceCompact={isCompact}
                    maxLength={10}
                />
                <TextField
                    forceCompact={isCompact}
                    label="Fornavn"
                    value={"Per"}
                    onChange={handleChange}
                    readOnly
                    variant="small"
                />
            </div>

            <div className="side-by-side jkl-spacing--bottom-2">
                <TextField
                    forceCompact={isCompact}
                    label="Telefon"
                    type="tel"
                    value={value}
                    onChange={handleChange}
                    placeholder="999 99 999"
                />
                <TextField
                    forceCompact={isCompact}
                    label="Telefon"
                    type="tel"
                    value={value}
                    onChange={handleChange}
                    placeholder="999 99 999"
                />
            </div>

            <div className="side-by-side jkl-spacing--bottom-5">
                <TextField
                    forceCompact={isCompact}
                    label="Passord"
                    type="password"
                    value={value}
                    onChange={handleChange}
                    helpLabel="Passord er en vanlig form for autentisering"
                    variant={variant}
                />
                <TextField
                    forceCompact={isCompact}
                    label="Passord"
                    type="password"
                    value={value}
                    onChange={handleChange}
                    helpLabel="Passord er en vanlig form for autentisering"
                    variant={variant}
                />
            </div>

            <div className="side-by-side jkl-spacing--bottom-4">
                <TextArea
                    rows={3}
                    label="Svar med en kommentar"
                    value={value}
                    onChange={handleChange}
                    forceCompact={isCompact}
                    placeholder="Begrens deg til tre linjer"
                />
                <TextArea
                    rows={3}
                    label="Svar med en kommentar"
                    value={value}
                    onChange={handleChange}
                    forceCompact={isCompact}
                    placeholder="Begrens deg til tre linjer"
                />
            </div>
            <div className="side-by-side jkl-spacing--bottom-2">
                <TextArea
                    label="Din livshistorie"
                    value={value}
                    onChange={handleChange}
                    variant={variant}
                    forceCompact={isCompact}
                />
                <TextArea
                    label="Din livshistorie"
                    value={value}
                    onChange={handleChange}
                    variant={variant}
                    forceCompact={isCompact}
                />
            </div>
        </section>
    );
};
export default Example;
