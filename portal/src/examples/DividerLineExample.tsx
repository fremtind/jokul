import React from "react";
import { Example } from "../components";
import { DividerLine } from "@fremtind/jkl-divider-line-react";
import "@fremtind/jkl-divider-line/divider-line.min.css";

const example = `<DividerLine />`;

const exampleImport = `import { DividerLine } from "@fremtind/jkl-divider-line-react";
import "@fremtind/jkl-divider-line/divider-line.min.css";`;

const DividerLineExample = () => (
    <Example exampleComponents={{ DividerLine }} exampleCode={example} exampleImport={exampleImport} />
);

export default DividerLineExample;
