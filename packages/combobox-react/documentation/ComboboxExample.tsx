import type { LabelVariant } from "@fremtind/jkl-input-group-react";
import React, { FC, useState } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { Combobox, type ComboboxValuePair } from "../src";

export const comboboxExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Med hjelpetekst", "Med feil"],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

export const ComboboxExample: FC<ExampleComponentProps> = ({ choiceValues, boolValues }) => {
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);

    const items: ComboboxValuePair[] = [
        { value: "google pixel", label: "Google Pixel", tagLabel: "GP" },
        { value: "apple", label: "Apple" },
        { value: "samsung", label: "Samsung" },
        { value: "lg", label: "LG" },
        { value: "huawei", label: "Huawei" },
        { value: "oneplus", label: "OnePlus" },
        { value: "nokia", label: "Nokia" },
        { value: "sony", label: "Sony" },
        { value: "doro", label: "Doro" },
    ];

    const [selectedValues, setSelectedValues] = useState<Array<ComboboxValuePair>>([]);

    const errorLabel =
        boolValues && boolValues["Med feil"] ? "Du må velge leverandørene, for eksempel Apple og Samsung." : undefined;
    const helpLabel =
        boolValues && boolValues["Med hjelpetekst"]
            ? "Med leverandør mener vi for eksempel Apple og Samsung."
            : undefined;

    return (
        <Combobox
            id="produsent"
            name="produsent"
            placeholder="Søk"
            labelProps={{ variant }}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            label="Velg leverandører"
            items={items}
            value={selectedValues}
            onChange={(event) => {
                setSelectedValues(event.target.selectedOptions);
                console.log("Change: ", event);
            }}
        />
    );
};

export default ComboboxExample;

export const comboboxExampleCode = ({ choiceValues, boolValues }: ExampleComponentProps): string => `
    <Combobox
    id="produsent"
    name="prdusent"
    placeholder="Søk"
    variant="${choiceValues?.["Variant"]}"
    helpLabel=${!!boolValues?.["Med hjelpetekst"] ? `"Hjelpsom beskjed"` : `{undefined}`}
    errorLabel=${!!boolValues?.["Med feil"] ? `"Beskrivende feilmelding"` : `{undefined}`}
    label="Velg leverandører"
    items={[
        { value: "google pixel", label: "Google Pixel", tagLabel: "GP" },
        { value: "apple", label: "Apple" },
        { value: "samsung", label: "Samsung" },
        { value: "lg", label: "LG" },
        { value: "huawei", label: "Huawei" },
        { value: "oneplus", label: "OnePlus" },
        { value: "nokia", label: "Nokia" },
        { value: "sony", label: "Sony" },
        { value: "doro", label: "Doro" },
    ]}
    value={selectedValues}
    onChange={setSelectedValues}
    />
`;
