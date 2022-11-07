import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { ContentToggleExample, contentToggleExampleCode, contentToggleExampleKnobs } from "./ContentToggleExample";
import "../../content-toggle/content-toggle.scss";

export default function Example() {
    return (
        <DevExample
            component={ContentToggleExample}
            knobs={contentToggleExampleKnobs}
            codeExample={contentToggleExampleCode}
        />
    );
}
