import React from "react";
import { DevExample } from "../../../doc-utils";
import { ContextualMenuExample, contextualMenuExampleCode, contextualMenuExampleKnobs } from "./ContextualMenuExample";
import "../../icons/icons.scss";
import "../../icon-button/icon-button.scss";
import "../../contextual-menu/contextual-menu.scss";

export default function Example() {
    return (
        <DevExample
            component={ContextualMenuExample}
            codeExample={contextualMenuExampleCode}
            knobs={contextualMenuExampleKnobs}
        />
    );
}
