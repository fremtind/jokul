import React from "react";
import { formatCode, InteractiveCode, useInteractiveCodeControls } from "../../../../../../utils/interactive-code";
// @ts-ignore
import { knobs } from "./BreadcrumbExample";
// @ts-ignore
import BreadcrumbExample from "./BreadcrumbExample?raw";

import "../styles/_index.scss";

const code = formatCode(BreadcrumbExample);

export default function Example() {
    const controls = useInteractiveCodeControls(code, knobs);

    return (
        <div className={"jkl"}>
            <InteractiveCode
                title={"Breadcrumb"}
                defaultCode={code}
                defaultShowEditor={true}
                noInline={true}
                controls={controls}
            />
        </div>
    );
}
