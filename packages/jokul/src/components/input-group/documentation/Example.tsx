import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { InputGroupExample, inputGroupExampleKnobs } from "./InputGroupExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return <DevExample component={InputGroupExample} knobs={inputGroupExampleKnobs} />;
}
