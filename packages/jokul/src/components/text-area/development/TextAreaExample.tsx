import React, { type ChangeEvent, type FC, useState } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import type { LabelVariant } from "../../input-group/types.js";
import { PopupTip } from "../../tooltip/PopupTip.js";
import { TextArea } from "../TextArea.js";

export const textAreaExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        "Ekspanderende",
        "Starter åpen",
        "Med teller",
        "Skjul progress",
        "Med hjelpetekst",
        "Med feil",
        "Med tooltip",
    ],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

export const TextAreaExample: FC<ExampleComponentProps> = ({
    choiceValues,
    boolValues,
}) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
        setValue(e.target.value);
    const variant = choiceValues?.["Variant"] as LabelVariant;
    const autoExpand = boolValues?.["Ekspanderende"];
    const startOpen = boolValues?.["Starter åpen"];
    const medTeller = boolValues?.["Med teller"];
    const skjulProgress = boolValues?.["Skjul progress"];
    const helpLabel = boolValues?.["Med hjelpetekst"]
        ? "Beskriv så utfyllende som mulig"
        : undefined;
    const errorLabel = boolValues?.["Med feil"]
        ? "Du må fylle ut en beskrivelse. Beskriv så utfyllende som mulig."
        : undefined;

    const tooltip = boolValues?.["Med tooltip"] ? (
        <PopupTip content={"Beskriv så utfyllende som mulig."} />
    ) : undefined;

    return (
        <TextArea
            className="jkl-spacing-40--top"
            label="Beskrivelse"
            name="beskrivelse"
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            tooltip={tooltip}
            autoExpand={autoExpand}
            startOpen={startOpen}
            counter={
                medTeller
                    ? { maxLength: 200, hideProgress: skjulProgress }
                    : undefined
            }
            labelProps={{ variant }}
            value={value}
            onChange={handleChange}
        />
    );
};
