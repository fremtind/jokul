import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";
import "@fremtind/jkl-icon-button/icon-button.min.css";

// Import actual example and component stylesheet (specific for this component):
import { SummaryTableExample } from "./SummaryTableExample";
import "@fremtind/jkl-summary-table/summary-table.css";

renderExample(<DevExample component={SummaryTableExample} />, document.getElementById("app"));
