import React from "react";
import { DevExample } from "../../../doc-utils";
import { LogoExample, logoExampleCode, logoExampleKnobs } from "./LogoExample";
import {
    LogoStampExample,
    logoStampExampleCode,
    logoStampExampleKnobs,
} from "./LogoStampExample";
import "../../logo/logo.scss";

export default function Example() {
    return (
        <>
            <DevExample
                component={LogoExample}
                knobs={logoExampleKnobs}
                codeExample={logoExampleCode}
            />
            <DevExample
                component={LogoStampExample}
                knobs={logoStampExampleKnobs}
                codeExample={logoStampExampleCode}
            />
        </>
    );
}
