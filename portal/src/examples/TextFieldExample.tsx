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
            <TextField label="Fornavn" value={value} onChange={(e) => setValue(e.target.value)} />
            <TextField label="Fornavn" value="Hannah Hart" />
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
