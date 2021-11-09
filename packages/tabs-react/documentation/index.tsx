import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { TabsExample } from "./TabsExample";
import "@fremtind/jkl-tabs/tabs.css";

renderExample(<DevExample component={TabsExample} />, document.getElementById("app"));
