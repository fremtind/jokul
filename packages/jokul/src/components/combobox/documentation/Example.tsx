import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { ComboboxExample, comboboxExampleKnobs } from "./ComboboxExample";

import "../styles/_index.scss";

export default function Example() {
    return <DevExample component={ComboboxExample} knobs={comboboxExampleKnobs} />;
}
