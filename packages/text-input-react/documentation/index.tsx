import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { TextInputExample } from "./TextInputExample";
import { TextAreaExample } from "./TextAreaExample";
import AutosuggestExample from "./AutosuggestExample";
import "@fremtind/jkl-text-input/text-input.css";
import "@fremtind/jkl-icon-button/icon-button.css";

renderExample(
    <>
        <DevExample
            title="TextInput"
            component={TextInputExample}
            knobs={{
                boolProps: ["Inline", "Compact", "Med handling", "Med hjelpetekst", "Med feil"],
                choiceProps: [
                    {
                        name: "Variant",
                        values: ["small", "medium", "large"],
                        defaultValue: 1,
                    },
                ],
            }}
        />
        <DevExample
            title="TextArea"
            component={TextAreaExample}
            knobs={{
                boolProps: ["Compact", "Ekspanderende", "Med teller", "Skjul progress", "Med hjelpetekst", "Med feil"],
                choiceProps: [
                    {
                        name: "Variant",
                        values: ["small", "medium", "large"],
                        defaultValue: 1,
                    },
                ],
            }}
        />
        <DevExample
            title="Autosuggest"
            component={AutosuggestExample}
            knobs={{
                boolProps: [
                    "Hjelpetekst",
                    "Feiltekst",
                    "Leadtekst",
                    "Ingen treff",
                    "Max antall treff",
                    "Placeholder",
                    "Vis ikoner",
                ],
                choiceProps: [
                    {
                        name: "Variant",
                        values: ["small", "medium", "large"],
                        defaultValue: 1,
                    },
                ],
            }}
        />
    </>,
    document.getElementById("app"),
);
