import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { DescriptionListExample } from "./DescriptionListExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return <DevExample component={DescriptionListExample} />;
}
