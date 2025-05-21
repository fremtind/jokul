import { DevExample } from "utils/dev-example/DevExample.js";
import React from "react";
import {
    PopoverControlledExample,
    popoverExampleKnobs,
    PopoverUnControlledExample,
} from "./PopoverExample.js";

export default function Example() {
    return (
        <>
            <DevExample
                title="Controlled popover"
                component={PopoverControlledExample}
                knobs={popoverExampleKnobs}
            />
            <DevExample
                title="Uncontrolled popover"
                component={PopoverUnControlledExample}
                knobs={popoverExampleKnobs}
            />
        </>
    );
}
