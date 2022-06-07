import React from "react";
import { DevExample } from "../../../doc-utils";
import { AutosuggestExample } from "./AutosuggestExample";
import { TextAreaExample } from "./TextAreaExample";
import { TextInputExample } from "./TextInputExample";
import "../../text-input/text-input.scss";
import "../../icon-button/icon-button.scss";
import "./index.scss";

export default function Example() {
    return (
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
                    boolProps: [
                        "Compact",
                        "Ekspanderende",
                        "Starter åpen",
                        "Med teller",
                        "Skjul progress",
                        "Med hjelpetekst",
                        "Med feil",
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
        </>
    );
}
