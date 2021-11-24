import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { ImageExample } from "./ImageExample";
import "@fremtind/jkl-icons/animated-icons.css";
import "@fremtind/jkl-text-input/text-input.min.css";

import { boolProps, choiceProps } from "./internal/props";
import "@fremtind/jkl-image/image.min.css";

renderExample(
    <DevExample component={ImageExample} knobs={{ boolProps, choiceProps }} />,
    document.getElementById("app"),
);
