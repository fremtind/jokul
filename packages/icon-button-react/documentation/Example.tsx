import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { IconButtonExample, iconButtonExampleKnobs } from "./IconButtonExample";
import "../../icon-button/icon-button.scss";

export default function Example() {
    return <DevExample component={IconButtonExample} knobs={iconButtonExampleKnobs} />;
}
