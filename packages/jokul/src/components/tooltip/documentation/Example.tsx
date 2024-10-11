import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { PopupTipExample } from "./PopupTipExample";
import { TooltipExample, tooltipExampleKnobs } from "./TooltipExample";

export default function Example() {
    return (
        <>
            <DevExample title="Tooltip" component={TooltipExample} knobs={tooltipExampleKnobs} />
            <DevExample title="Tooltip Click" component={PopupTipExample} knobs={tooltipExampleKnobs} />
        </>
    );
}
