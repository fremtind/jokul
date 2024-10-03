import React from "react";
import { formatCode, InteractiveCode, useInteractiveCodeControls } from "../../../../../../utils/interactive-code";
// @ts-ignore
import { knobs as popupTipKnobs } from "./PopupTipExample";
// @ts-ignore
import PopupTipExample from "./PopupTipExample?raw";
// @ts-ignore
import { knobs as tooltipKnobs } from "./TooltipExample";
// @ts-ignore
import TooltipExample from "./TooltipExample?raw";

import "../styles/tooltip.scss";

const tooltipCode = formatCode(TooltipExample);
const popupTipCode = formatCode(PopupTipExample);

export default function Example() {
    const tooltipControls = useInteractiveCodeControls(tooltipCode, tooltipKnobs);
    const popupTipControls = useInteractiveCodeControls(popupTipCode, popupTipKnobs);

    return (
        <div className={"jkl"}>
            <InteractiveCode
                title={"Tooltip"}
                defaultCode={tooltipCode}
                defaultShowEditor={true}
                noInline={true}
                controls={tooltipControls}
            />
            <InteractiveCode
                title={"PopupTip"}
                defaultCode={popupTipCode}
                defaultShowEditor={true}
                noInline={true}
                controls={popupTipControls}
            />
        </div>
    );
}
