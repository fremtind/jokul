import React, { useState, ChangeEvent, VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { LabelVariant } from "@fremtind/jkl-core";
import { TextInput } from "../src";
import { Action } from "../src/TextInput";

export const TextInputExample: VFC<ExampleComponentProps> = ({ choiceValues, boolValues }) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);
    const inline = boolValues && boolValues["Inline"];
    const action =
        boolValues && boolValues["Med handling"]
            ? ({
                  icon: "clear",
                  label: "Nullstill feltet",
                  onClick: () => setValue(""),
              } as Action)
            : undefined;
    const inverted = boolValues && boolValues["Invertert"];
    const compact = boolValues && boolValues["Kompakt"];
    const helpLabel = boolValues && boolValues["Med hjelpetekst"] ? "Help label" : undefined;
    const errorLabel = boolValues && boolValues["Med feil"] ? "Error label" : undefined;

    return (
        <TextInput
            variant={variant}
            inline={inline}
            inverted={inverted}
            forceCompact={compact}
            action={action}
            label="Skriv noe her"
            name="textinput"
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            placeholder="Placeholder"
            maxLength={35}
            value={value}
            onChange={handleChange}
            onKeyDown={() => console.log("onKeyDown event")}
        />
    );
};
