import React from "react";
import { DevExample } from "../../../doc-utils";
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
