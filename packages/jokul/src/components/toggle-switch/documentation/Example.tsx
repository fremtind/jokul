import React from "react";
import { formatCode, InteractiveCode, useInteractiveCodeControls } from "../../../../../../utils/interactive-code";
// @ts-ignore
import { knobs } from "./ToggleSwitchExample";
// @ts-ignore
import ToggleSwitchExample from "./ToggleSwitchExample?raw";

import "../styles/toggle-switch.scss";

const code = formatCode(ToggleSwitchExample);

export default function Example() {
    const controls = useInteractiveCodeControls(code, knobs);

    return (
        <div className={"jkl"}>
            <InteractiveCode
                title={"Loader"}
                defaultCode={code}
                defaultShowEditor={true}
                noInline={true}
                controls={controls}
            />
        </div>
    );
}
