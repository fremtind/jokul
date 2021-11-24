import React, { useState, ChangeEvent, VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { LabelVariant } from "@fremtind/jkl-core";
import { TextArea } from "../src";

export const TextAreaExample: VFC<ExampleComponentProps> = ({ choiceValues, boolValues }) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);
    const variant = choiceValues?.["Variant"] as LabelVariant;
    const inverted = boolValues?.["Invertert"];
    const compact = boolValues?.["Kompakt"];
    const autoExpand = boolValues?.["Ekspanderende"];
    const medTeller = boolValues?.["Med teller"];
    const skjulProgress = boolValues?.["Skjul progress"];
    const helpLabel = boolValues?.["Med hjelpetekst"] ? "Beskriv så utfyllende som mulig" : undefined;
    const errorLabel = boolValues?.["Med feil"]
        ? "Du må fylle ut en beskrivelse. Beskriv så utfyllende som mulig."
        : undefined;

    return (
        <TextArea
            className="jkl-spacing-xl--top"
            label="Beskrivelse"
            name="beskrivelse"
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            autoExpand={autoExpand}
            forceCompact={compact}
            counter={medTeller ? { maxLength: 200, hideProgress: skjulProgress } : undefined}
            variant={variant}
            inverted={inverted}
            value={value}
            onChange={handleChange}
        />
    );
};

export const textAreaExampleCode = ({ choiceValues, boolValues }: ExampleComponentProps): string => `
<TextArea
    label="Beskrivelse"
    name="beskrivelse"
    helpLabel=${boolValues?.["Med hjelpetekst"] ? `"Beskriv så utfyllende som mulig"` : `{undefined}`}
    errorLabel=${
        boolValues?.["Med feil"] ? `"Du må fylle ut en beskrivelse. Beskriv så utfyllende som mulig."` : `{undefined}`
    }
    autoExpand={${boolValues?.["Ekspanderende"]}}
    forceCompact={${boolValues?.["Kompakt"]}}
    counter={${
        boolValues?.["Med teller"] ? `{ maxLength: 200, hideProgress: ${boolValues?.["Skjul progress"]} }` : undefined
    }}
    variant="${choiceValues?.["Variant"]}"
    {/* NB! inverted er deprecated */}
    inverted={${boolValues?.["Invertert"]}}
/>
`;
