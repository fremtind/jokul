import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import {
    FileInputExample,
    fileInputExampleCode,
    fileInputExampleKnobs,
} from "./FileInputExample.js";

import "../../file-input/styles/file-input.scss";
import "../../button/styles/button.scss";
import "../../icon-button/styles/icon-button.scss";
import "../../icon/styles/icon.scss";
import "../../input-group/styles/input-group.scss";
import "../../progress-bar/styles/progress-bar.scss";

export default function Example() {
    return (
        <DevExample
            component={FileInputExample}
            codeExample={fileInputExampleCode}
            knobs={fileInputExampleKnobs}
        />
    );
}
