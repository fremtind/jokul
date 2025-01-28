import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { LogoExample, logoExampleKnobs } from "./LogoExample.js";
import { LogoStampExample, logoStampExampleKnobs } from "./LogoStampExample.js";

import "./styles.scss";

export default function Example() {
    return (
        <>
            <DevExample component={LogoExample} knobs={logoExampleKnobs} />
            <DevExample
                component={LogoStampExample}
                knobs={logoStampExampleKnobs}
            />
        </>
    );
}
