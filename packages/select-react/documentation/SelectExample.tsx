import React, { useState, VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Select, NativeSelect } from "../src";
import { LabelVariant } from "@fremtind/jkl-core";

export const SelectExample: VFC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const C = boolValues && boolValues["Native"] ? NativeSelect : Select;

    const values = [
        { value: "1", label: "Apple" },
        { value: "2", label: "Samsung" },
        { value: "3", label: "Google og utvalgte partnere" },
        { value: "4", label: "LG" },
    ];
    const [value, setValue] = useState<string>();

    const errorLabel = boolValues && boolValues["Med feil"] ? "Beskrivende feilmelding" : undefined;
    const helpLabel = boolValues && boolValues["Med hjelpetekst"] ? "Prøv å søke på et tall" : undefined;
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);
    const searchAble = boolValues && boolValues["Med søk"];

    return (
        <C
            id="produsent"
            name="produsent"
            forceCompact={boolValues && boolValues["Compact"]}
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
