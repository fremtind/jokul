import React from "react";
import { DevExample } from "../../../doc-utils";
import { IconButtonExample, iconButtonExampleKnobs } from "./IconButtonExample";
import "../../icon-button/icon-button.scss";

export default function Client() {
    return <DevExample component={IconButtonExample} knobs={iconButtonExampleKnobs} />;
}
