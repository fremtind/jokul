import { DevExample } from "doc-utils";
import React from "react";
import { ChipExample, chipExampleKnobs } from "./ChipExample";
import "../../chip/chip.scss";

export default function Example() {
    return (
        <DevExample
            title="Chip"
            component={ChipExample}
            knobs={chipExampleKnobs}
        />
    );
}
