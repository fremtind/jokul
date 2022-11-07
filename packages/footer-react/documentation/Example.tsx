import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { FooterExample, footerExampleCode, footerExampleKnobs } from "./FooterExample";
import "../../footer/footer.scss";

export default function Example() {
    return <DevExample component={FooterExample} knobs={footerExampleKnobs} codeExample={footerExampleCode} />;
}
