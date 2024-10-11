import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { AccordionExample, knobs } from "./AccordionExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return <DevExample component={AccordionExample} knobs={knobs} />;
}
