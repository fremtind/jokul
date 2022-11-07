import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { LogoExample, logoExampleCode, logoExampleKnobs } from "./LogoExample";
import { LogoStampExample, logoStampExampleCode, logoStampExampleKnobs } from "./LogoStampExample";
import "../../logo/logo.scss";

export default function Example() {
    return (
        <>
            <DevExample component={LogoExample} knobs={logoExampleKnobs} codeExample={logoExampleCode} />
            <DevExample component={LogoStampExample} knobs={logoStampExampleKnobs} codeExample={logoStampExampleCode} />
        </>
    );
}
