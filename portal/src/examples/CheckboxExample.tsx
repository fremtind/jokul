import React from "react";
import { Example } from "../components";
import { Checkbox, CheckboxGroup } from "@fremtind/jkl-checkbox-react";
import "@fremtind/jkl-checkbox/checkbox.min.css";
// @ts-ignore
import type from "!raw-loader!@fremtind/jkl-checkbox-react/build/Checkbox.d.ts";

const example = `() => {const [isChecked, setChecked] = React.useState(false);

return (<>
    <Checkbox name="I am uncontrolled" />
    <Checkbox name="controlled" checked={isChecked} onChange={()=>setChecked(!isChecked)}>I am controlled</Checkbox>
    <Checkbox name="locked" checked={true}>I always checked</Checkbox>
    <CheckboxGroup
        className="jkl-spacing--top-4"
        inline={false}
        choices={["I am checkbox", "Do you like multiple choices?"]}
        onChange={(name, val) => alert(name + " is now " + val)}
    />
</>)}`;

const exampleImport = `import { Checkbox } from "@fremtind/jkl-checkbox-react";
import "@fremtind/jkl-checkbox/checkbox.min.css";`;

const CheckboxExample = () => (
    <Example
        exampleComponents={{ Checkbox, CheckboxGroup }}
        exampleCode={example}
        type={type}
        exampleImport={exampleImport}
    />
);

export default CheckboxExample;
