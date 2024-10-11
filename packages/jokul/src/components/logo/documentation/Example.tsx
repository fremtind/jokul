import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { LogoExample, logoExampleKnobs } from "./LogoExample";
import { LogoStampExample, logoStampExampleKnobs } from "./LogoStampExample";

import "./styles.scss";

export default function Example() {
    return (
        <>
            <DevExample component={LogoExample} knobs={logoExampleKnobs} />
            <DevExample component={LogoStampExample} knobs={logoStampExampleKnobs} />
        </>
    );
}
