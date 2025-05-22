import { DevExample } from "utils/dev-example/DevExample.js";
import React from "react";
import { ImageExample } from "./ImageExample.js";
import { choiceProps } from "./internal/props.js";

import "./style.scss";

export default function Example() {
    return <DevExample component={ImageExample} knobs={{ choiceProps }} />;
}
