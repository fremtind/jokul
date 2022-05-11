import React from "react";
import { DevExample } from "../../../doc-utils";
import { LogoExample, logoExampleKnobs } from "./LogoExample";
import { LogoStampExample, logoStampExampleKnobs } from "./LogoStampExample";
import "../../logo/logo.scss";

export default function Example() {
    return (
        <>
            <DevExample component={LogoExample} knobs={logoExampleKnobs} />
            <DevExample component={LogoStampExample} knobs={logoStampExampleKnobs} />
        </>
    );
}
