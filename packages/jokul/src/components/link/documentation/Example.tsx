import React from "react";
import { formatCode, InteractiveCode, useInteractiveCodeControls } from "../../../../../../utils/interactive-code";
// @ts-ignore
import { knobs } from "./LinkExample";
// @ts-ignore
import LinkExample from "./LinkExample?raw";

import "../styles/link.scss";

const code = formatCode(LinkExample);

export default function Example() {
    const controls = useInteractiveCodeControls(code, knobs);

    return (
        <div className={"jkl"}>
            <InteractiveCode
                title={"Link"}
                defaultCode={code}
                defaultShowEditor={true}
                noInline={true}
                controls={controls}
            />
        </div>
    );
}
