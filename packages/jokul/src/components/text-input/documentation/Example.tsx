import { DevExample } from "doc-utils/DevExample.js";
import React from "react";
import { TextAreaExample, textAreaExampleKnobs } from "./TextAreaExample.js";
import { TextInputExample, textInputExampleKnobs } from "./TextInputExample.js";

import "./index.scss";

export default function Example() {
    return (
        <>
            <DevExample title="TextInput" component={TextInputExample} knobs={textInputExampleKnobs} />
            <DevExample title="TextArea" component={TextAreaExample} knobs={textAreaExampleKnobs} />
        </>
    );
}
