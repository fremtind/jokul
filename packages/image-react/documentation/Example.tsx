import React from "react";
import { DevExample } from "../../../doc-utils";
import { ImageExample } from "./ImageExample";
import { choiceProps } from "./internal/props";
import "../../image/image.scss";
import "../../button/button.scss";
import "../../icons/icons.scss";
import "../../text-input/text-input.scss";

export default function Example() {
    return <DevExample component={ImageExample} knobs={{ choiceProps }} />;
}
