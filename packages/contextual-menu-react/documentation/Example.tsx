import React from "react";
import { DevExample } from "../../../doc-utils";
import { ContextualMenuExample, contextualMenuExampleCode, contextualMenuExampleKnobs } from "./ContextualMenuExample";
import {
    ContextualMenuToggleSwitchExample,
    contextualMenuToggleSwitchExampleCode,
    contextualMenuToggleSwitchExampleKnobs,
} from "./ContextualMenuToggleSwitchExample";
import "../../icons/icons.scss";
import "../../button/button.scss";
import "../../tooltip/tooltip.scss";
import "../../icon-button/icon-button.scss";
import "../../contextual-menu/contextual-menu.scss";
import "../../toggle-switch/toggle-switch.scss";

export default function Example() {
    return (
        <>
            <DevExample
                component={ContextualMenuExample}
                codeExample={contextualMenuExampleCode}
                knobs={contextualMenuExampleKnobs}
            />
            <DevExample
                component={ContextualMenuToggleSwitchExample}
                codeExample={contextualMenuToggleSwitchExampleCode}
                knobs={contextualMenuToggleSwitchExampleKnobs}
            />
        </>
    );
}
