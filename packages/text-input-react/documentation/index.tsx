import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { TextInputExample } from "./TextInputExample";
import { TextAreaExample } from "./TextAreaExample";
import AutosuggestExample from "./AutosuggestExample";
import "@fremtind/jkl-text-input/text-input.scss";
import "@fremtind/jkl-icon-button/icon-button.scss";

renderExample(
    <>
        <DevExample
            component={TextInputExample}
            knobs={{
                boolProps: ["Inline", "Kompakt", "Invertert", "Med handling", "Med hjelpetekst", "Med feilmelding"],
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
            component={TextAreaExample}
            knobs={{
                boolProps: ["Kompakt", "Invertert", "Ekspanderende", "Med hjelpetekst", "Med feilmelding"],
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
            component={AutosuggestExample}
            knobs={{
                boolProps: [
                    "Invertert",
                    "Hjelpetekst",
                    "Feiltekst",
                    "Leadtekst",
                    "Ingen treff",
                    "Max antall treff",
                    "Placeholder",
                    "Vis kontroller",
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
