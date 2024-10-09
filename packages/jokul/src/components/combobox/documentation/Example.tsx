import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { ComboboxExample, comboboxExampleKnobs } from "./ComboboxExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";
import "../styles/_index.scss";

export default function Example() {
    return <DevExample component={ComboboxExample} knobs={comboboxExampleKnobs} />;
}
