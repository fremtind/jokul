import React from "react";
import { Example } from "../components";
import { TextField } from "@fremtind/jkl-text-input-react";
import { Field } from "@fremtind/jkl-field-group-react";
import { PrimaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-text-input/text-input.min.css";
// @ts-ignore
import textFieldType from "!raw-loader!@fremtind/jkl-text-input-react/build/TextField.d.ts";

const example = `() => {
    const [value, setValue] = React.useState("");
    const [hasError, setError] = React.useState(false);
    return (
        <>
            <Field
                legend="Fornavn"
                className="jkl-spacing--bottom-3"
                errorLabel={hasError && "Kun ett navn her"}
            >
                <TextField
                    invalid={hasError}
                    placeholder="Ditt første navn"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </Field>

            <Field className="jkl-spacing--bottom-3" legend="Fornavn" errorLabel="Bare fornavn her">
                <TextField value="Hannah Hart" invalid={true} onChange={() => {}} />
            </Field>
            <Field standalone className="jkl-spacing--bottom-3" legend="Jammenmeg">
                <TextField
                    value="Hart"
                    onChange={() => {}}
                    onBlur={(e) => console.log("It blurred with value: ", e.target.value)}
                />
            </Field>
            <PrimaryButton onClick={() => setError(!hasError)}>{hasError ? "Skjul" : "Vis"} feilmelding</PrimaryButton>
        </>
    );
}`;

const exampleImport = `
import { TextField } from "@fremtind/jkl-text-input-react";
import "@fremtind/jkl-text-input/text-input.min.css";`;

const TextFieldExample = () => (
    <Example
        exampleComponents={{ TextField, Field, PrimaryButton }}
        exampleCode={example}
        type={textFieldType}
        exampleImport={exampleImport}
    />
);

export default TextFieldExample;
