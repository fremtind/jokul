import { LabelVariant } from "@fremtind/jkl-core";
import React, { useState, FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { Select, NativeSelect } from "../src";

export const selectExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Native", "Med hjelpetekst", "Med feil", "Med søk"],
    choiceProps: [
        {
            name: "Maks. viste valg",
            values: ["3", "Default (5)", "8", "Mange"],
            defaultValue: 1,
        },
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

const getMaxChoices = (rawMaxChoices?: string) => {
    switch (rawMaxChoices) {
        case "3":
            return 3;
        case "Default (5)":
            return 5;
        case "8":
            return 8;
        case "Mange":
            return 100;
        default:
            return undefined;
    }
};

export const SelectExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const C = boolValues && boolValues["Native"] ? NativeSelect : Select;

    const values = [
        { value: "1", label: "Google Pixel" },
        { value: "2", label: "Apple" },
        { value: "3", label: "Samsung" },
        { value: "4", label: "LG" },
        { value: "5", label: "Huawei" },
        { value: "6", label: "OnePlus" },
        { value: "7", label: "XiaoMi" },
        { value: "8", label: "Nokia" },
        { value: "9", label: "Sony" },
        { value: "10", label: "Doro" },
    ];
    const [value, setValue] = useState<string>();

    const errorLabel = boolValues && boolValues["Med feil"] ? "Beskrivende feilmelding" : undefined;
    const helpLabel = boolValues && boolValues["Med hjelpetekst"] ? "Prøv å søke på et tall" : undefined;
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);
    const searchAble = boolValues && boolValues["Med søk"];
    const maxChoices = getMaxChoices(choiceValues?.["Maks. viste valg"]);

    return (
        <C
            id="produsent"
            name="produsent"
            variant={variant}
            label="Hvilket merke er telefonen?"
            items={values}
            value={value}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            onChange={(event) => {
                setValue(event.target.value);
                console.log("Change: ", event);
            }}
            searchable={
                searchAble
                    ? (filter, item) => {
                          if (typeof item === "object") {
                              return item.value.includes(filter);
                          } else {
                              return item.includes(item);
                          }
                      }
                    : undefined
            }
            onFocus={(event) => {
                console.log("Focus: ", event);
            }}
            onBlur={(event) => {
                console.log("Blur: ", event);
            }}
            maxShownOptions={maxChoices}
        />
    );
};

export const selectCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<${!!boolValues?.["Native"] ? "NativeSelect" : "Select"}
    ref={selectRef}
    id="produsent"
    name="produsent"
    variant="${choiceValues?.["Variant"]}"
    label="Hvilket merke er telefonen?"
    helpLabel=${!!boolValues?.["Med hjelpetekst"] ? `"Hjelpsom beskjed"` : `{undefined}`}
    errorLabel=${!!boolValues?.["Med feil"] ? `"Beskrivende feilmelding"` : `{undefined}`}
    items={[
        { value: "google", label: "Google og noen flere" },
        { value: "apple", label: "Apple" },
        { value: "samsung", label: "Samsung" },
        { value: "LG", label: "LG" },
    ]}
    value={value}
    onChange={setValue}
    searchable={${!!boolValues?.["Med søk"]}}
    onFocus={onFocus}
    onBlur={onBlur}
    maxShownOptions={${getMaxChoices(choiceValues?.["Maks. viste valg"])}}
/>
`;
