import React from "react";
import { DevExample } from "../../../doc-utils";
import { TooltipExample, tooltipExampleCode, tooltipExampleKnobs } from "./TooltipExample";
import "../../transitions/transitions.scss";
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
