import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import Example from "./Example";
import "@fremtind/jkl-list/list.css";
import { boolProps } from "./internal/props";

renderExample(<DevExample component={Example} knobs={{ boolProps }} />, document.getElementById("app"));
