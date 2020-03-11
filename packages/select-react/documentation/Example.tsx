import React, { useState, ChangeEvent } from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Select, NativeSelect } from "../src";
import { LabelVariant } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-select/select.min.css";

export const Example = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const C = boolValues && boolValues["Native"] ? NativeSelect : Select;

    const values = [
        { value: "firstvalue", label: "Value 1" },
        { value: "secondvalue", label: "Value 2" },
    ];
    const [value, setValue] = useState<string>();
    const universalSetValue = (input: string | ChangeEvent<HTMLSelectElement>) => {
        if (typeof input === "string") {
            setValue(input);
        } else {
            setValue(input.target.value);
        }
    };

    const errorLabel = boolValues && boolValues["Med feil"] ? "Beskrivende feilmelding" : undefined;
    const helpLabel = boolValues && boolValues["Med hjelpetekst"] ? "Hjelpsom beskjed" : undefined;
    const variant = choiceValues && (choiceValues["Etikettvariant"] as LabelVariant);

    return (
        <C
            forceCompact={boolValues && boolValues["Kompakt"]}
            variant={variant}
            label="Select"
            items={values}
            value={value}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            onChange={universalSetValue}
        />
    );
};

export default Example;
