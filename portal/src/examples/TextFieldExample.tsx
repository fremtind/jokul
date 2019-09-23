import React from "react";
import { Example } from "../components";
import { TextField } from "@fremtind/jkl-text-input-react";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-text-input/text-input.min.css";
// @ts-ignore
import textFieldType from "!raw-loader!@fremtind/jkl-text-input-react/build/TextField.d.ts";
import { FieldGroup } from "@fremtind/jkl-field-group-react";

const example = `() => {
    const [value, setValue] = React.useState("");
    const [hasError, setError] = React.useState(false);
    return (
        <>
            <TextField
                label="Hva er fornavnet ditt?"
                className="jkl-spacing--bottom-2"
                errorLabel={hasError ? "Kun ett navn her" : undefined}
                placeholder="Ditt første navn"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <TextField
                variant="secondary"
                className="jkl-spacing--bottom-5"
                label="Og etternavnet?"
                errorLabel={hasError ? "Kun ett navn her" : undefined}
                value="Hannah Hart"
                onChange={() => {}}
            />
            <TextField
                variant="small"
                className="jkl-spacing--bottom-3"
                label="Din mors pikenavn"
                onChange={() => {}}
                onBlur={(e) => console.log("It blurred with value: ", e.target.value)}
            />
            <PrimaryButton onClick={() => setError(!hasError)}>{hasError ? "Skjul" : "Vis"} feilmelding</PrimaryButton>
        </>
    );
}`;

const exampleImport = `
import { TextField } from "@fremtind/jkl-text-input-react";
import "@fremtind/jkl-text-input/text-input.min.css";`;

const TextFieldExample = () => (
    <Example
        exampleComponents={{ TextField, PrimaryButton }}
        exampleCode={example}
        type={textFieldType}
        exampleImport={exampleImport}
    />
);

export default TextFieldExample;
