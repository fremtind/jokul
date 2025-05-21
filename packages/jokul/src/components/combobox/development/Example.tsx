import { DevExample } from "utils/dev-example/DevExample.js";
import React from "react";
import ComboboxExample, { comboboxExampleKnobs } from "./ComboboxExample.js";

export default function Example() {
    return (
        <DevExample component={ComboboxExample} knobs={comboboxExampleKnobs} />
    );
}
