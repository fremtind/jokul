import type { LabelVariant } from "@fremtind/jkl-input-group-react";
import React, { FC, useState } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { Combobox } from "../src";

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
    const [selectedValue, setSelectedValue] = useState<any>([] || null);
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);

    const items = [
        { value: "google pixel", label: "Google Pixel" },
        { value: "apple", label: "Apple" },
        { value: "samsung", label: "Samsung" },
        { value: "lg", label: "LG" },
        { value: "huawei", label: "Huawei" },
        { value: "oneplus", label: "OnePlus" },
        { value: "nokia", label: "Nokia" },
        { value: "sony", label: "Sony" },
        { value: "doro", label: "Doro" },
    ];

    const errorLabel =
        boolValues && boolValues["Med feil"] ? "Du må velge leverandørene, for eksempel Apple og Samsung." : undefined;
    const helpLabel =
        boolValues && boolValues["Med hjelpetekst"]
            ? "Med leverandør mener vi for eksempel Apple og Samsung."
            : undefined;

    return (
        <Combobox
            id="produsent"
            name="prdusent"
            placeholder="Søk"
            labelProps={{ variant }}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            label="Velg leverandører"
            items={items}
            value={selectedValue}
            onChange={(value: any) => {
                setSelectedValue(value);
                console.log("Change: ", value);
            }}
        />
    );
};

export default ComboboxExample;

export const comboboxExampleCode = ({ choiceValues }: ExampleComponentProps): string => `

return (
    <Combobox
    placeholder="Søk"
    variant="${choiceValues?.["Variant"]}"
    label="Velg leverandører
    items={[
        { value: "google pixel", label: "Google Pixel" },
        { value: "apple", label: "Apple" },
        { value: "samsung", label: "Samsung" },
        { value: "lg", label: "LG" },
        { value: "huawei", label: "Huawei" },
        { value: "oneplus", label: "OnePlus" },
        { value: "nokia", label: "Nokia" },
        { value: "sony", label: "Sony" },
        { value: "doro", label: "Doro" },
    ]}
    value={selectedValue}
    onChange={(value: any) => {
        setSelectedValue(value);
        console.log("Change: ", value);
    }}
    />
)

`;
