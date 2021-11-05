import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { ListExample } from "./ListExample";
import "@fremtind/jkl-list/list.css";
import { boolProps } from "./internal/props";

renderExample(<DevExample component={ListExample} knobs={{ boolProps }} />, document.getElementById("app"));
