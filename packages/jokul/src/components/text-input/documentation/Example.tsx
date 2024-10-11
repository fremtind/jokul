import React from "react";
import { DevExample } from "../../../../../../utils/dev-example";
import { TextAreaExample, textAreaExampleKnobs } from "./TextAreaExample";
import { TextInputExample, textInputExampleKnobs } from "./TextInputExample";

import "./index.scss";

export default function Example() {
    return (
        <>
            <DevExample title="TextInput" component={TextInputExample} knobs={textInputExampleKnobs} />
            <DevExample title="TextArea" component={TextAreaExample} knobs={textAreaExampleKnobs} />
        </>
    );
}
