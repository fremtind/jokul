import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { ListExamples } from "./ListExample";
import "@fremtind/jkl-list/list.css";

renderExample(<DevExample component={ListExamples} />, document.getElementById("app"));
