import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { TooltipExample, tooltipExampleCode, tooltipExampleKnobs } from "./TooltipExample";
import "../../tooltip/tooltip.scss";

export default function Example() {
    return (
        <DevExample
            title="Tooltip"
            component={TooltipExample}
            knobs={tooltipExampleKnobs}
            codeExample={tooltipExampleCode}
        />
    );
}
