import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { CardExample } from "./CardExample";
import "@fremtind/jkl-card/card.css";
import "@fremtind/jkl-button/button.css";

renderExample(<DevExample component={CardExample} />, document.getElementById("app"));
