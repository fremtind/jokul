import { DevExample } from "utils/dev-example/DevExample.js";
import React from "react";
import { ChipExample, chipExampleKnobs } from "./ChipExample.js";

export default function Example() {
    return (
        <DevExample
            title="Chip"
            component={ChipExample}
            knobs={chipExampleKnobs}
        />
    );
}
