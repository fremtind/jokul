import React from "react";
import { Example } from "../components";
import { TextArea } from "@fremtind/jkl-text-input-react";

import textAreaType from "!raw-loader!@fremtind/jkl-text-input-react/build/TextArea.d.ts";
import "@fremtind/jkl-text-input/text-input.min.css";

const example = `() => {
    const [value, setValue] = React.useState("");
    return (
        <>
            <TextArea
                className="jkl-spacing--bottom-3"
                label="Livshistorie"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                />
            <TextArea
                variant="secondary"
                className="jkl-spacing--bottom-3"
                label="Livshistorie"
                value="gobjop uvucenli bdachukme sotw uvliljai suibki"
                onChange={()=>{}}
                errorLabel="That makes no sense"
            />
            <TextArea
                variant="small"
                className="jkl-spacing--bottom-3"
                label="Livshistorie"
                placeholder="Her kan du skrive mye"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={(e) => console.log("You wrote: ", e.target.value)}
                helpLabel="Bruk store ord"
            />
        </>);
}`;

const exampleImport = `import { TextArea } from "@fremtind/jkl-text-input-react";
import "@fremtind/jkl-text-input/text-input.min.css";
`;

const TextAreaExample = () => (
    <Example exampleComponents={{ TextArea }} exampleCode={example} type={textAreaType} exampleImport={exampleImport} />
);

export default TextAreaExample;
