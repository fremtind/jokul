import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { ImageExample } from "./ImageExample";
import { choiceProps } from "./internal/props";

import "./style.scss";

export default function Example() {
    return <DevExample component={ImageExample} knobs={{ choiceProps }} />;
}
