import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { LogoExample, logoExampleKnobs } from "./LogoExample";
import { LogoStampExample, logoStampExampleKnobs } from "./LogoStampExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";
import "./styles.scss";

export default function Example() {
    return (
        <>
            <DevExample component={LogoExample} knobs={logoExampleKnobs} />
            <DevExample component={LogoStampExample} knobs={logoStampExampleKnobs} />
        </>
    );
}
