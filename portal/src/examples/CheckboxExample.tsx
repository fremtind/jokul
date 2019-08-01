import React from "react";
import { Example } from "../components";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import "@fremtind/jkl-checkbox/checkbox.min.css";
// @ts-ignore
import type from "!raw-loader!@fremtind/jkl-checkbox-react/build/Checkbox.d.ts";

const example = `() => {const [checked, toggle] = React.useState(false);

return (<>
    <Checkbox>I am uncontrolled</Checkbox>
    <Checkbox checked={checked} onChange={()=>toggle(!checked)}>I am controlled</Checkbox>
    <Checkbox checked={true}>I always checked</Checkbox>
    <div className="jkl-spacing--top-4" style={{ display: "flex", flexFlow: "column" }}>
        <Checkbox onChange={(val) => alert(val)}>I am checkbox</Checkbox>
        <Checkbox onChange={(val) => alert(val)}>Do you like mulitple choices?</Checkbox>
    </div>
</>)}`;

const exampleImport = `import { Checkbox } from "@fremtind/jkl-checkbox-react";
import "@fremtind/jkl-checkbox/checkbox.min.css";`;

const CheckboxExample = () => (
    <Example exampleComponents={{ Checkbox }} exampleCode={example} type={type} exampleImport={exampleImport} />
);

export default CheckboxExample;
