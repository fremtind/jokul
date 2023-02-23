import React from "react";
import { DevExample } from "../../../doc-utils";
import { FooterExample, footerExampleCode, footerExampleKnobs } from "./FooterExample";
import "../../footer/footer.scss";
export default function Example() {
    return (
        <DevExample
            scrollable={true}
            component={FooterExample}
            knobs={footerExampleKnobs}
            codeExample={footerExampleCode}
        />
    );
}
