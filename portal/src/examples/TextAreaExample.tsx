import React from "react";
import { Example } from "../components";
import { TextArea } from "@fremtind/jkl-text-input-react";
// @ts-ignore
import textAreaType from "!raw-loader!@fremtind/jkl-text-input-react/build/TextArea.d.ts";
import "@fremtind/jkl-text-input/text-input.min.css";

const example = `() => {
    const [value, setValue] = React.useState("");
    return <TextArea label="Fornavn" value={value} onChange={(e) => setValue(e.target.value)} />;
}`;

const exampleImport = `import { TextArea } from "@fremtind/jkl-text-input-react";
import "@fremtind/jkl-text-input/text-input.min.css";
`;

const TextAreaExample = () => (
    <Example exampleComponents={{ TextArea }} exampleCode={example} type={textAreaType} exampleImport={exampleImport} />
);

export default TextAreaExample;
