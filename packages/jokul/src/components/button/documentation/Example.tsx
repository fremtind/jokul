import React from "react";
import { formatCode, InteractiveCode, useInteractiveCodeControls } from "../../../../../../utils/interactive-code";
import AnchorsExample from "./AnchorsExample?raw";
// @ts-ignore
import { knobs } from "./ButtonExample";
import ButtonExample from "./ButtonExample?raw";

import "../styles/_index.scss";

const code = formatCode(ButtonExample);
const anchorsCode = formatCode(AnchorsExample);

export default function Example() {
    const controls = useInteractiveCodeControls(code, knobs);
    const anchorsControls = useInteractiveCodeControls(anchorsCode, []);
    return (
        <div className={"jkl"}>
            <InteractiveCode
                title={"Button"}
                defaultCode={code}
                defaultShowEditor={true}
                noInline={true}
                controls={controls}
            />
            <InteractiveCode
                title={"Button som lenke"}
                defaultCode={anchorsCode}
                defaultShowEditor={true}
                noInline={true}
                controls={anchorsControls}
            />
        </div>
    );
}
