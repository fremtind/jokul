import React from "react";
import { Example } from "../components";
import { TextField } from "@fremtind/jkl-text-input-react";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-text-input/text-input.min.css";

import textFieldType from "!raw-loader!@fremtind/jkl-text-input-react/build/TextField.d.ts";

const example = `() => {
    const [value, setValue] = React.useState("");
    const [hasError, setError] = React.useState(false);
    return (
        <>
            <TextField
                variant="large"
                label="Hva er fornavnet ditt?"
                className="jkl-spacing--bottom-2"
                errorLabel={hasError ? "Kun ett navn her" : undefined}
                placeholder="Ditt første navn"
                value={value}
                maxLength={10}
                onChange={(e) => setValue(e.target.value)}
            />

            <TextField
                className="jkl-spacing--bottom-4"
                label="Og etternavnet?"
                errorLabel={hasError ? "Kun ett navn her" : undefined}
                value="Andersen"
                width="20em"
                onChange={() => {}}
            />
            <TextField
                variant="small"
                className="jkl-spacing--bottom-3"
                label="Din mors pikenavn"
                errorLabel={hasError ? "Kan ikke inneholde spesialtegn" : undefined}
                onChange={() => {}}
                width="30em"
                onBlur={(e) => console.log("It blurred with value: ", e.target.value)}
            />
            <p className="jkl-p">
                Jeg har hatt sykdommen i <TextField inline type="number" errorLabel={hasError ? "Det var lenge!" : undefined} label="sykdomsvarighet i år" width="2em" maxLength={2} /> år.
            </p>
            <PrimaryButton onClick={() => setError(!hasError)}>{hasError ? "Skjul" : "Vis"} feilmelding</PrimaryButton>
        </>
    );
}`;

const exampleImport = `;
import { TextField } from "@fremtind/jkl-text-input-react";
import "@fremtind/jkl-text-input/text-input.min.css";
`;

const TextFieldExample = () => (
    <Example
        exampleComponents={{ TextField, PrimaryButton }}
        exampleCode={example}
        type={textFieldType}
        exampleImport={exampleImport}
    />
);

export default TextFieldExample;
