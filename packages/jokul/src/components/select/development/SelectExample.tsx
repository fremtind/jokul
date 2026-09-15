import React, { type FC, useState } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import type { LabelVariant } from "../../input-group/types.js";
import { PopupTip } from "../../tooltip/PopupTip.js";
import { Select } from "../Select.js";

export const selectExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        "Med hjelpetekst",
        "Med feil",
        "Med tooltip",
        "Med søk",
        "Med sekundærtekst",
    ],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

export const SelectExample: FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
}) => {
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
        { value: "8", label: "Nokia" },
        { value: "9", label: "Sony" },
        { value: "10", label: "Doro" },
    ];
    const [value, setValue] = useState<string>("");

    const errorLabel = boolValues?.["Med feil"]
        ? "Du må velge merket til telefonen, for eksempel Apple."
        : undefined;
    const helpLabel = boolValues?.["Med hjelpetekst"]
        ? "Med merke mener vi for eksempel Apple eller Samsung."
        : undefined;
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);
    const searchable = boolValues?.["Med søk"];

    const tooltip = boolValues?.["Med tooltip"] ? (
        <PopupTip
            content={
                "Vi spør om merket på telefonen for å finne riktig reperatør for deg."
            }
        />
    ) : undefined;

    return (
        <Select
            id="produsent"
            name="produsent"
            label="Hvilket merke er telefonen?"
            labelProps={{ variant }}
            items={values}
            value={value}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            tooltip={tooltip}
            onChange={(event) => {
                setValue(event.target.value);
                console.log("Change: ", event);
            }}
            searchable={searchable}
            onFocus={(event) => {
                console.log("Focus: ", event);
            }}
            onBlur={(event) => {
                console.log("Blur: ", event);
            }}
        />
    );
};
