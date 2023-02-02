import React from "react";
import { DevExample } from "../../../doc-utils";
import { FooterExample, footerExampleCode, footerExampleKnobs } from "./FooterExample";
import "../../footer/footer.scss";
import "../../footer/contact-info.scss";

export default function Example() {
    return <DevExample component={FooterExample} knobs={footerExampleKnobs} codeExample={footerExampleCode} />;
}
