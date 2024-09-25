import React from "react";
import { DevExample } from "../../../doc-utils";
import { MenuExample, MenuExampleCode, MenuExampleKnobs } from "./MenuExample";
import {
    MenuToggleSwitchExample,
    MenuToggleSwitchExampleCode,
    MenuToggleSwitchExampleKnobs,
} from "./MenuToggleSwitchExample";
import "../../icons/icons.scss";
import "../../button/button.scss";
import "../../tooltip/tooltip.scss";
import "../../icon-button/icon-button.scss";
import "../../menu/menu.scss";
import "../../toggle-switch/toggle-switch.scss";

export default function Example() {
    return (
        <>
            <DevExample component={MenuExample} codeExample={MenuExampleCode} knobs={MenuExampleKnobs} />
            <DevExample
                component={MenuToggleSwitchExample}
                codeExample={MenuToggleSwitchExampleCode}
                knobs={MenuToggleSwitchExampleKnobs}
            />
        </>
    );
}
