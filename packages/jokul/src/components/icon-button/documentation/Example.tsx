import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { IconButtonExample, iconButtonExampleKnobs } from "./IconButtonExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return <DevExample component={IconButtonExample} knobs={iconButtonExampleKnobs} />;
}
