import React from "react";
import { Example } from "../components";
import { DividerLine } from "@fremtind/jkl-divider-line-react";
import "@fremtind/jkl-divider-line/divider-line.min.css";
// @ts-ignore
//import dividerLineType from "!raw-loader!@fremtind/jkl-divider-line-react/build/DividerLine.d.ts";

const example = `<DividerLine />`;

const exampleImport = `import { DividerLine } from "@fremtind/jkl-divider-line-react";
import "@fremtind/jkl-divider-line/divider-line.min.css";`;

const DividerLineExample = () => (
    <Example
        exampleComponents={{ DividerLine }}
        exampleCode={example}
        //type={dividerLineType}
        exampleImport={exampleImport}
    />
);

export default DividerLineExample;
