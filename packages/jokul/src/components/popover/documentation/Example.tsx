import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { PopoverControlledExample, popoverExampleKnobs, PopoverUnControlledExample } from "./PopoverExample";

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
