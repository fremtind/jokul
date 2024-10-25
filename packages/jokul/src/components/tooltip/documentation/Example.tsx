import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { PopupTipExample } from "./PopupTipExample.js";
import { TooltipExample, tooltipExampleKnobs } from "./TooltipExample.js";

export default function Example() {
    return (
        <>
            <DevExample title="Tooltip" component={TooltipExample} knobs={tooltipExampleKnobs} />
            <DevExample title="Tooltip Click" component={PopupTipExample} knobs={tooltipExampleKnobs} />
        </>
    );
}
