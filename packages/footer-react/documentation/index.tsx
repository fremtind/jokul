import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { FooterExample, footerExampleKnobs } from "./FooterExample";
import "@fremtind/jkl-footer/footer.css";

renderExample(<DevExample component={FooterExample} knobs={footerExampleKnobs} />, document.getElementById("app"));
