import React from "react";
import { DevExample } from "../../../doc-utils";
import { HamburgerExample, hamburgerExampleCode, hamburgerExampleKnobs } from "./HamburgerExample";
import "../../hamburger/hamburger.scss";
import "../../content-toggle/content-toggle.scss";

export default function Example() {
    return <DevExample component={HamburgerExample} knobs={hamburgerExampleKnobs} codeExample={hamburgerExampleCode} />;
}
