import { LabelVariant } from "@fremtind/jkl-core";
import { ExampleComponentProps, ExampleKnobsProps } from "@fremtind/jkl-internal-doc-utils";
import React, { useState, FC } from "react";
import { DatePicker, formatInput, isBlurTargetOutside } from "../src";

export const datepickerExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Utvidet velger", "Med feil", "Med hjelpetekst"],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

const monthsIsh = (num: number) => {
    const raw = 1000 * 60 * 60 * 24 * (num * 30 - 5);
    return raw < 0 ? 12 + raw : raw;
};

export const DatepickerExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const helpLabel =
        boolValues && boolValues["Med hjelpetekst"] ? "Du vil være forsikret fra denne datoen" : undefined;
    const errorLabel = boolValues && boolValues["Med feil"] ? "Du kan ikke velge en dato som har vært" : undefined;
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);

    const [value, setValue] = useState<string>("");

    return (
        <DatePicker
            label="Velg startdato for forsikringen"
            labelProps={{ variant }}
            extended={boolValues && boolValues["Utvidet velger"]}
            errorLabel={errorLabel}
            name="datepicker"
            helpLabel={helpLabel}
            disableBeforeDate={formatInput(new Date(Date.now() - monthsIsh(14)))}
            disableAfterDate={formatInput(new Date(Date.now() + monthsIsh(14)))}
            value={value}
            onFocus={(e, date, meta) => {
                console.log("onFocus", {
                    event: e,
                    date,
                    meta,
                });
            }}
            onBlur={(e, date, meta) => {
                // Ignorer blurs som går til kalenderknapper
                if (isBlurTargetOutside(e)) {
                    console.log("onBlur", {
                        event: e,
                        date,
                        meta,
                    });
                }
            }}
            onChange={(e, date, meta) => {
                setValue(e.target.value);
                console.log("onChange", {
                    event: e,
                    date,
                    meta,
                });
            }}
            onKeyDown={(e, date, meta) => {
                console.log("onKeyDown", {
                    event: e,
                    date,
                    meta,
                });
            }}
            action={{
                onBlur: (e) => {
                    // Ignorer blurs som går tilbake til inputfeltet
                    if (isBlurTargetOutside(e)) {
                        console.log("action.onBlur", {
                            event: e,
                        });
                    }
                },
                onClick: (e) => {
                    console.log("action.onClick", {
                        event: e,
                    });
                },
            }}
        />
    );
};

export const datepickerExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => `
<DatePicker
    label="Velg startdato for forsikringen"
    variant="${choiceValues?.["Variant"] || "small"}"${
    boolValues?.["Med feil"]
        ? `
    errorLabel="Du kan ikke velge en dato som har vært"`
        : ""
}${
    boolValues?.["Med hjelpetekst"]
        ? `
    helpLabel="Du vil være forsikret fra denne datoen"`
        : ""
}${
    boolValues?.["Utvidet velger"]
        ? `
    extended`
        : ""
}
/>
`;
