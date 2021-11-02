import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import "@fremtind/jkl-tag/tag.css";
import TagExample from "./TagExample";

renderExample(<DevExample title="Tag" component={TagExample} />, document.getElementById("app"));
