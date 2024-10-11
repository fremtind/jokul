import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { ImageExample } from "./ImageExample";
import { choiceProps } from "./internal/props";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";
import "./style.scss";

export default function Example() {
    return <DevExample component={ImageExample} knobs={{ choiceProps }} />;
}
