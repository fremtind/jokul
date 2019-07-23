import React from "react";
import { Example } from "../components";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import "@fremtind/jkl-checkbox/checkbox.min.css";
// @ts-ignore
import type from "!raw-loader!@fremtind/jkl-checkbox-react/build/Checkbox.d.ts";

const example = `<>
    <Checkbox>I am checkbox!</Checkbox>
    <Checkbox>Am I?</Checkbox>
    <Checkbox defaultChecked={true}>I am a checked checkbox!</Checkbox>
    <div style={{ display: "flex", flexFlow: "column", marginTop: "5rem" }}>
        <Checkbox onChange={(val) => alert(val)}>I am checkbox</Checkbox>
        <Checkbox onChange={(val) => alert(val)}>Do you like mulitple choices?</Checkbox>
    </div>
</>`;

const exampleImport = `import { Checkbox } from "@fremtind/jkl-checkbox-react";
import "@fremtind/jkl-checkbox/checkbox.min.css";`;

const CheckboxExample = () => (
    <Example exampleComponents={{ Checkbox }} exampleCode={example} type={type} exampleImport={exampleImport} />
);

export default CheckboxExample;
