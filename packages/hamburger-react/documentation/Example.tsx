import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { HamburgerExample, hamburgerExampleCode, hamburgerExampleKnobs } from "./HamburgerExample";
import "../../hamburger/hamburger.scss";
import "../../content-toggle/content-toggle.scss";

export default function Example() {
    return <DevExample component={HamburgerExample} knobs={hamburgerExampleKnobs} codeExample={hamburgerExampleCode} />;
}
