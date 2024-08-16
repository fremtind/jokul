import React from "react";
import { DevExample } from "../../../doc-utils";
import { PopoverExample, popoverExampleCode, popoverExampleKnobs } from "./PopoverExample";
import "../../popover/popover.scss";

export default function Example() {
    return <DevExample component={PopoverExample} codeExample={popoverExampleCode} knobs={popoverExampleKnobs} />;
}
