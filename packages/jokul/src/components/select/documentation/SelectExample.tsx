import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC, useState } from "react";
import { LabelVariant } from "../../input-group/Label.js";
import { NativeSelect } from "../NativeSelect.js";
import { Select } from "../Select.js";

export const selectExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        "Native",
        "Med hjelpetekst",
        "Med feil",
        "Med tooltip",
        "Med søk",
        "Med sekundærtekst",
    ],
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

export const SelectExample: FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
}) => {
    const isNativeSelect = boolValues && boolValues["Native"];
    const C = isNativeSelect ? NativeSelect : Select;

    const values = [
        {
            value: "1",
            label: "Google Pixel",
            description: boolValues?.["Med sekundærtekst"]
                ? "Gjelder også Nexus-serien"
                : undefined,
        },
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
    const [value, setValue] = useState<string>("");

    const errorLabel =
        boolValues && boolValues["Med feil"]
            ? "Du må velge merket til telefonen, for eksempel Apple."
            : undefined;
    const helpLabel =
        boolValues && boolValues["Med hjelpetekst"]
            ? "Med merke mener vi for eksempel Apple eller Samsung."
            : undefined;
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);
    const searchAble = boolValues && boolValues["Med søk"];
    const maxChoices = getMaxChoices(choiceValues?.["Maks. viste valg"]);

    const tooltipProps = boolValues?.["Med tooltip"]
        ? {
              content:
                  "Vi spør om merket på telefonen for å finne riktig reperatør for deg.",
          }
        : undefined;

    return (
        <C
            id="produsent"
            name="produsent"
            label="Hvilket merke er telefonen?"
            labelProps={{ variant }}
            items={values}
            value={value}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            tooltipProps={tooltipProps}
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
            {...(isNativeSelect ? {} : { maxShownOptions: maxChoices })}
        />
    );
};
