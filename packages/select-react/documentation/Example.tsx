import React, { useState, ChangeEvent } from "react";
import { Select, NativeSelect } from "../src";
import { LabelVariant } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-select/select.min.css";

interface Props {
    boolValues: { [key: string]: boolean };
    choiceValues: { [key: string]: string };
}

export const Example = ({ boolValues, choiceValues }: Props) => {
    const C = boolValues["Native"] ? NativeSelect : Select;

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

    const errorLabel = boolValues["Med feil"] ? "Beskrivende feilmelding" : undefined;
    const helpLabel = boolValues["Med hjelpetekst"] ? "Hjelpsom beskjed" : undefined;
    const variant = choiceValues["Etikettvariant"] as LabelVariant;

    return (
        <C
            forceCompact={boolValues["Kompakt"]}
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
