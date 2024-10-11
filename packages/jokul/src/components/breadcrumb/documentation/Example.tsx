import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { BreadcrumbExample, knobs } from "./BreadcrumbExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";

export default function Example() {
    return <DevExample component={BreadcrumbExample} knobs={knobs} />;
}
