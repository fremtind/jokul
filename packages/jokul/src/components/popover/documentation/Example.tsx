import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { PopoverControlledExample, popoverExampleKnobs, PopoverUnControlledExample } from "./PopoverExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return (
        <>
            <DevExample title="Controlled popover" component={PopoverControlledExample} knobs={popoverExampleKnobs} />
            <DevExample
                title="Uncontrolled popover"
                component={PopoverUnControlledExample}
                knobs={popoverExampleKnobs}
            />
        </>
    );
}
