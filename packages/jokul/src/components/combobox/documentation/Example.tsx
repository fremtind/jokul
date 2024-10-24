import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import ComboboxExample, { comboboxExampleKnobs } from "./ComboboxExample.js";

import "../styles/_index.scss";

export default function Example() {
    return <DevExample component={ComboboxExample} knobs={comboboxExampleKnobs} />;
}
