import React, { FC, useState } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { Combobox } from "../src";

export const comboboxExampleKnobs: ExampleKnobsProps = {};

export const ComboboxExample: FC<ExampleComponentProps> = () => {
    const [selectedValue, setSelectedValue] = useState<any>([] || null);

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

    return (
        <>
            <Combobox
                placeholder="Søk"
                label="Velg leverandører"
                items={items}
                value={selectedValue}
                onChange={(value: any) => {
                    setSelectedValue(value);
                    console.log("Change: ", value);
                }}
            />
        </>
    );
};

export default ComboboxExample;

export const comboboxExampleCode: CodeExample = () => `
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

return (
    <Combobox
    placeholder="Søk"
    items={items}
    value={selectedValue}
    onChange={(value: any) => {
        setSelectedValue(value);
        console.log("Change: ", value);
    }}
    />
)

`;
