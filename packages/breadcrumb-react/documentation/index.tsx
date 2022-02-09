import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { BreadcrumbExample } from "./BreadcrumbExample";
import "@fremtind/jkl-breadcrumb/breadcrumb.css";

renderExample(<DevExample component={BreadcrumbExample} knobs={{}} />, document.getElementById("app"));
