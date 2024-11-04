import React from "react";
import { DevExample } from "../../../doc-utils";
import { PopupTipExample, popupTipExampleCode } from "./PopupTipExample";
import {
    TooltipExample,
    tooltipExampleCode,
    tooltipExampleKnobs,
} from "./TooltipExample";
import "../../tooltip/tooltip.scss";
import "../../button/button.scss";
import "../../icons/icons.scss";

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
                component={PopupTipExample}
                knobs={tooltipExampleKnobs}
                codeExample={popupTipExampleCode}
            />
        </>
    );
}
