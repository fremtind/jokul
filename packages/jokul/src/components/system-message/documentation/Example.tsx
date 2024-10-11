import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { SystemMessageExample, systemMessageKnobs } from "./SystemMessageExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return <DevExample component={SystemMessageExample} knobs={systemMessageKnobs} />;
}
