import { DevExample } from "@fremtind/jkl-internal-doc-utils";
import React from "react";
import { AutosuggestExample, autosuggestExampleCode, autosuggestExampleKnobs } from "./AutosuggestExample";
import { TextAreaExample, textAreaExampleCode, textAreaExampleKnobs } from "./TextAreaExample";
import { TextInputExample, textInputExampleCode, textInputExampleKnobs } from "./TextInputExample";
import "../../text-input/text-input.scss";
import "../../icon-button/icon-button.scss";
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
