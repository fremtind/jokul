import React from "react";
import { DevExample } from "../../../../../../doc-utils";
import { TextAreaExample, textAreaExampleKnobs } from "./TextAreaExample";
import { TextInputExample, textInputExampleKnobs } from "./TextInputExample";

import "../../../../../../packages/webfonts/webfonts.scss";
import "../../../core/styles/core.scss";
import "../../../styles/styles.scss";
import "./index.scss";

export default function Example() {
    return (
        <>
            <DevExample title="TextInput" component={TextInputExample} knobs={textInputExampleKnobs} />
            <DevExample title="TextArea" component={TextAreaExample} knobs={textAreaExampleKnobs} />
        </>
    );
}
