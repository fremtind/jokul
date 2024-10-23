import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { IconButtonExample, iconButtonExampleKnobs } from "./IconButtonExample.js";

export default function Example() {
    return <DevExample component={IconButtonExample} knobs={iconButtonExampleKnobs} />;
}
