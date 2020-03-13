import React, { useState, ChangeEvent } from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { LabelVariant } from "@fremtind/jkl-core";
import { TextInput, Action } from "../src";

export function NewExample({ choiceValues, boolValues }: ExampleComponentProps) {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);
    const inline = boolValues && boolValues["Inline"];
    const action =
        boolValues && boolValues["Med handling"]
            ? ({
                  icon: "search",
                  label: "Skriv til konsoll",
                  onClick: console.log,
              } as Action)
            : undefined;
    const inverted = boolValues && boolValues["Invertert"];
    const compact = boolValues && boolValues["Kompakt"];
    const helpLabel = boolValues && boolValues["Med hjelpetekst"] ? "Help label" : undefined;
    const errorLabel = boolValues && boolValues["Med feilmelding"] ? "Error label" : undefined;

    return (
        <TextInput
            variant={variant}
            inline={inline}
            inverted={inverted}
            forceCompact={compact}
            action={action}
            label="Skriv noe her"
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            placeholder="Placeholder"
            maxLength={40}
            value={value}
            onChange={handleChange}
        />
    );
}
