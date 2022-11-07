import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { ImageExample } from "./ImageExample";
import { choiceProps } from "./internal/props";
import "../../image/image.scss";
import "../../button/button.scss";
import "../../icons/animated-icons.scss";
import "../../text-input/text-input.scss";

export default function Example() {
    return <DevExample component={ImageExample} knobs={{ choiceProps }} />;
}
