import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { ButtonExample, buttonExampleKnobs } from "./ButtonExample";
import "../../button/button.scss";
import "../../loader/loader.scss";
import "./style.scss";

export default function Example() {
    return <DevExample component={ButtonExample} knobs={buttonExampleKnobs} />;
}
