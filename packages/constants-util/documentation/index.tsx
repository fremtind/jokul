import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { ConstantsExample } from "./ConstantsExample";
import "@fremtind/jkl-table/table.css";

renderExample(<DevExample component={ConstantsExample} />, document.getElementById("app"));
