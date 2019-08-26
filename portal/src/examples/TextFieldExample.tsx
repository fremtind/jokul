import React from "react";
import { Example } from "../components";
import { TextField } from "@fremtind/jkl-text-input-react";
import "@fremtind/jkl-text-input/text-input.min.css";
// @ts-ignore
import textFieldType from "!raw-loader!@fremtind/jkl-text-input-react/build/TextField.d.ts";

const example = `
() => {
    const [value, setValue] = React.useState("");
    return (
        <>
            <TextField 
                className="jkl-spacing--bottom-3"
                label="Fornavn"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                helpLabel="Ditt første navn"
            />
            <TextField
                className="jkl-spacing--bottom-3"
                label="Fornavn"
                value="Hannah Hart"
                onChange={()=>{}}
                errorLabel="Bare fornavn her"
            />
            <TextField
                className="jkl-spacing--bottom-3"
                label="Etternavn"
                value="Hart"
                onChange={()=>{}}
                onBlur={(e) => console.log("It blurred with value: ", e.target.value)}
            />
        </>
    );
}`;

const exampleImport = `
import { TextField } from "@fremtind/jkl-text-input-react";
import "@fremtind/jkl-text-input/text-input.min.css";`;

const TextFieldExample = () => (
    <Example
        exampleComponents={{ TextField }}
        exampleCode={example}
        type={textFieldType}
        exampleImport={exampleImport}
    />
);

export default TextFieldExample;
