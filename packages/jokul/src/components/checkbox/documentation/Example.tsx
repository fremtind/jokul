import React from "react";
import { formatCode, InteractiveCode, useInteractiveCodeControls } from "../../../../../../utils/interactive-code";
// @ts-ignore
import { knobs } from "./CheckboxExample";
import ButtonExample from "./CheckboxExample?raw";
import SingleCheckboxExample from "./SingleCheckboxExample?raw";

import "../styles/_index.scss";

const code = formatCode(ButtonExample);
const singleCheckboxCode = formatCode(SingleCheckboxExample);

export default function Example() {
    const controls = useInteractiveCodeControls(code, knobs);
    const singleCheckboxControls = useInteractiveCodeControls(singleCheckboxCode, knobs);
    return (
        <div className={"jkl"}>
            <InteractiveCode
                title={"Checkbox"}
                defaultCode={code}
                defaultShowEditor={true}
                noInline={true}
                controls={controls}
            />
            <InteractiveCode
                title={"Frittstående Checkbox"}
                defaultCode={singleCheckboxCode}
                defaultShowEditor={true}
                noInline={true}
                controls={singleCheckboxControls}
            />
        </div>
    );
}
