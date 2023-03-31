import React from "react";
import { DevExample } from "../../../doc-utils";
import { FileInputExample, fileInputExampleCode, fileInputExampleKnobs } from "./FileInputExample";
import "../../file-input/file-input.scss";
import "../../button/button.scss";
import "../../icon-button/icon-button.scss";
import "../../icons/icons.scss";
import "../../input-group/input-group.scss";
import "../../loader/loader.scss";
import "../../progress-bar/progress-bar.scss";

export default function Example() {
    return <DevExample component={FileInputExample} codeExample={fileInputExampleCode} knobs={fileInputExampleKnobs} />;
}
