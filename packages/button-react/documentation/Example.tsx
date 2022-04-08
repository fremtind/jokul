import React from "react";
import { DevExample } from "../../../doc-utils";
import { ButtonExample, buttonExampleKnobs } from "./ButtonExample";
import "../../button/button.scss";
import "../../loader/loader.scss";
import "./style.scss";

export default function Example() {
    return <DevExample component={ButtonExample} knobs={buttonExampleKnobs} />;
}
