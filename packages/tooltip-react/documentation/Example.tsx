import React from "react";
import { DevExample } from "../../../doc-utils";
import { TooltipClickExample, tooltipClickExampleCode } from "./TooltipClickExample";
import { TooltipExample, tooltipExampleCode, tooltipExampleKnobs } from "./TooltipExample";
import "../../tooltip/tooltip.scss";

export default function Example() {
    return (
        <>
            <DevExample
                title="Tooltip"
                component={TooltipExample}
                knobs={tooltipExampleKnobs}
                codeExample={tooltipExampleCode}
            />
            <DevExample
                title="Tooltip Click"
                component={TooltipClickExample}
                knobs={tooltipExampleKnobs}
                codeExample={tooltipClickExampleCode}
            />
        </>
    );
}
