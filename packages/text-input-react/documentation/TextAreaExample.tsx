import { LabelVariant } from "@fremtind/jkl-core";
import React, { useState, ChangeEvent, FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { TextArea } from "../src/TextArea";

export const textAreaExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Ekspanderende", "Starter åpen", "Med teller", "Skjul progress", "Med hjelpetekst", "Med feil"],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

export const TextAreaExample: FC<ExampleComponentProps> = ({ choiceValues, boolValues }) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);
    const variant = choiceValues?.["Variant"] as LabelVariant;
    const autoExpand = boolValues?.["Ekspanderende"];
    const startOpen = boolValues?.["Starter åpen"];
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
            startOpen={startOpen}
            counter={medTeller ? { maxLength: 200, hideProgress: skjulProgress } : undefined}
            labelProps={{ variant }}
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
    startOpen={${boolValues?.["Starter åpen"]}}
    counter={${
        boolValues?.["Med teller"] ? `{ maxLength: 200, hideProgress: ${boolValues?.["Skjul progress"]} }` : undefined
    }}
    variant="${choiceValues?.["Variant"]}"
/>
`;
