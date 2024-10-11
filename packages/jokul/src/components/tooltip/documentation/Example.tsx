import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { PopupTipExample } from "./PopupTipExample";
import { TooltipExample, tooltipExampleKnobs } from "./TooltipExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return (
        <>
            <DevExample title="Tooltip" component={TooltipExample} knobs={tooltipExampleKnobs} />
            <DevExample title="Tooltip Click" component={PopupTipExample} knobs={tooltipExampleKnobs} />
        </>
    );
}
