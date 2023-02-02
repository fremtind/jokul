import React from "react";
import { DevExample } from "../../../doc-utils";
import { ComboboxExample, comboboxExampleCode, comboboxExampleKnobs } from "./ComboboxExample";
import "../../combobox/combobox.scss";

export default function Example() {
    return <DevExample component={ComboboxExample} codeExample={comboboxExampleCode} knobs={comboboxExampleKnobs} />;
}
