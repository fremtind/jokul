import React from "react";
import { Example } from "../components";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import "@fremtind/jkl-checkbox/checkbox.min.css";
// @ts-ignore
import type from "!raw-loader!@fremtind/jkl-checkbox-react/build/Checkbox.d.ts";

const example = `() => {const [isChecked, setChecked] = React.useState(false);

return (<>
    <Checkbox name="I am uncontrolled" />
    <Checkbox name="controlled" checked={isChecked} onChange={()=>setChecked(!isChecked)}>I am controlled</Checkbox>
    <Checkbox name="locked" checked={true}>I always checked</Checkbox>
</>)}`;

const exampleImport = `import { Checkbox, CheckboxGroup } from "@fremtind/jkl-checkbox-react";
import "@fremtind/jkl-checkbox/checkbox.min.css";`;

const CheckboxExample = () => (
    <Example exampleComponents={{ Checkbox }} exampleCode={example} types={type} exampleImport={exampleImport} />
);

export default CheckboxExample;
