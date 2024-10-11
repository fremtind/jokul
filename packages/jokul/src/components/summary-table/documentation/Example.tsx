import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { SummaryTableExample } from "./SummaryTableExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";
import "./summary-table-example.scss";

export default function Example() {
    return <DevExample component={SummaryTableExample} />;
}
