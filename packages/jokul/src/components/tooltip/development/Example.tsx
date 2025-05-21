import { DevExample } from "utils/dev-example/DevExample.js";
import React from "react";
import { PopupTipExample } from "./PopupTipExample.js";
import { TooltipExample, tooltipExampleKnobs } from "./TooltipExample.js";

export default function Example() {
    return (
        <>
            <DevExample
                title="PopupTip"
                component={PopupTipExample}
                knobs={tooltipExampleKnobs}
            />
            <DevExample
                title="Tooltip"
                component={TooltipExample}
                knobs={tooltipExampleKnobs}
            />
        </>
    );
}
