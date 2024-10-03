import React from "react";
import { formatCode, InteractiveCode, useInteractiveCodeControls } from "../../../../../../utils/interactive-code";
// @ts-ignore
import { knobs } from "./AccordionExample";
// @ts-ignore
import AccordionExample from "./AccordionExample?raw";

import "../styles/accordion.scss";

const code = formatCode(AccordionExample);

export default function Example() {
    const controls = useInteractiveCodeControls(code, knobs);
    return (
        <div className={"jkl"}>
            <InteractiveCode
                title={"Accordion"}
                defaultCode={code}
                defaultShowEditor={true}
                noInline={true}
                controls={controls}
            />
        </div>
    );
}
