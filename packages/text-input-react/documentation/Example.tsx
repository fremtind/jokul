import React from "react";
import { DevExample } from "../../../doc-utils";
import { AutosuggestExample, autosuggestExampleCode, autosuggestExampleKnobs } from "./AutosuggestExample";
import { TextAreaExample, textAreaExampleCode, textAreaExampleKnobs } from "./TextAreaExample";
import { TextInputExample, textInputExampleCode, textInputExampleKnobs } from "./TextInputExample";
import "../../text-input/text-input.scss";
import "../../icon-button/icon-button.scss";
import "../../input-group/input-group.scss";
import "../../tooltip/tooltip.scss";
import "./index.scss";

export default function Example() {
    return (
        <>
            <DevExample
                title="TextInput"
                component={TextInputExample}
                knobs={textInputExampleKnobs}
                codeExample={textInputExampleCode}
            />
            <DevExample
                title="TextArea"
                component={TextAreaExample}
                knobs={textAreaExampleKnobs}
                codeExample={textAreaExampleCode}
            />
            <DevExample
                title="Autosuggest"
                component={AutosuggestExample}
                knobs={autosuggestExampleKnobs}
                codeExample={autosuggestExampleCode}
            />
        </>
    );
}
