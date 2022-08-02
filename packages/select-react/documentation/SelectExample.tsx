import { LabelVariant } from "@fremtind/jkl-core";
import React, { useState, FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { Select, NativeSelect } from "../src";

export const selectExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Native", "Multiple", "Compact", "Med hjelpetekst", "Med feil", "Med søk"],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

export const SelectExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const C = boolValues && boolValues["Native"] ? NativeSelect : Select;

    const values = [
        { value: "1", label: "Apple" },
        { value: "2", label: "Samsung" },
        { value: "3", label: "Google og utvalgte partnere" },
        { value: "4", label: "LG" },
    ];
    const [value, setValue] = useState<string | string[]>();

    const errorLabel = boolValues && boolValues["Med feil"] ? "Beskrivende feilmelding" : undefined;
    const helpLabel = boolValues && boolValues["Med hjelpetekst"] ? "Prøv å søke på et tall" : undefined;
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);
    const searchAble = boolValues && boolValues["Med søk"];
    const multiple = boolValues && boolValues["Multiple"];

    return (
        <C
            id="produsent"
            name="produsent"
            forceCompact={boolValues && boolValues["Compact"]}
            multiple={boolValues && boolValues["Multiple"]}
            variant={variant}
            label="Hvilket merke er telefonen?"
            items={values}
            value={value}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            onChange={(event) => {
                console.log("Change: ", event);
                if (multiple) {
                    const { options } = event.target;
                    const value: string[] = [];
                    for (let i = 0, l = options.length; i < l; i += 1) {
                        if (options[i].selected) {
                            value.push(options[i].value);
                        }
                    }
                    setValue(value);
                } else {
                    setValue(event.target.value);
                }
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
        />
    );
};

export const selectCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<${!!boolValues?.["Native"] ? "NativeSelect" : "Select"}
    ref={selectRef}
    id="produsent"
    name="produsent"
    forceCompact={${!!boolValues?.["Compact"]}}
    variant="${choiceValues?.["Variant"]}"
    label="Hvilket merke er telefonen?"
    helpLabel=${!!boolValues?.["Med hjelpetekst"] ? `"Hjelpsom beskjed"` : `{undefined}`}
    errorLabel=${!!boolValues?.["Med feil"] ? `"Beskrivende feilmelding"` : `{undefined}`}
    items={[
        { value: "apple", label: "Apple" },
        { value: "samsung", label: "Samsung" },
        { value: "google", label: "Google og utvalgte partnere" },
        { value: "LG", label: "LG" },
    ]}
    value={value}
    onChange={setValue}
    searchable={${!!boolValues?.["Med søk"]}}
    onFocus={onFocus}
    onBlur={onBlur}
/>
`;
