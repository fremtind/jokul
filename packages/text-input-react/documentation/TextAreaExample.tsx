import React, { useState, ChangeEvent, VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { LabelVariant } from "@fremtind/jkl-core";
import { TextArea } from "../src";

export const TextAreaExample: VFC<ExampleComponentProps> = ({ choiceValues, boolValues }) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);
    const inverted = boolValues && boolValues["Invertert"];
    const compact = boolValues && boolValues["Kompakt"];
    const autoExpand = boolValues && boolValues["Ekspanderende"];
    const medTeller = boolValues && boolValues["Med teller"];
    const skjulProgress = boolValues && boolValues["Skjul progress"];
    const helpLabel = boolValues && boolValues["Med hjelpetekst"] ? "Help label" : undefined;
    const errorLabel = boolValues && boolValues["Med feil"] ? "Error label" : undefined;

    return (
        <TextArea
            counter={medTeller ? { maxLength: 200, hideProgress: skjulProgress } : undefined}
            variant={variant}
            inverted={inverted}
            forceCompact={compact}
            placeholder="Placeholder"
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            className="jkl-spacing--top-2"
            label="Skriv noe her"
            name="textarea"
            autoExpand={autoExpand}
            value={value}
            onChange={handleChange}
            onKeyDown={() => console.log("onKeyDown event")}
        />
    );
};
