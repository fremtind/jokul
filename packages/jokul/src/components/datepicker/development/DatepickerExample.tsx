import React, { type FC, useState } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { Help } from "../../help/index.js";
import type { LabelVariant } from "../../input-group/types.js";
import { DatePicker } from "../date-picker/DatePicker.js";

const today = new Date();
const monthsPast = new Date(
    new Date(today).setMonth(new Date(today).getMonth() - 14),
).toISOString();
const monthsComing = new Date(
    new Date(today).setMonth(new Date(today).getMonth() + 14),
).toISOString();

export const datepickerExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Med hjelpetekst", "Med feil", "Med tooltip"],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

export const DatepickerExample: FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
}) => {
    const helpLabel = boolValues?.["Med hjelpetekst"]
        ? "Du vil være forsikret fra denne datoen"
        : undefined;
    const errorLabel = boolValues?.["Med feil"]
        ? "Du kan ikke velge en dato som har vært"
        : undefined;
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);

    const tooltip = boolValues?.["Med tooltip"] ? (
        <Help buttonText="Hjelp">
            Du vil være forsikret fra denne datoen. Du kan ikke velge en dato
            som har vært.{" "}
        </Help>
    ) : undefined;

    const [value, setValue] = useState<string>("2002-20-20");

    return (
        <DatePicker
            label="Velg startdato for forsikringen"
            labelProps={{ variant }}
            tooltip={tooltip}
            errorLabel={errorLabel}
            name="datepicker"
            helpLabel={helpLabel}
            min={monthsPast}
            max={monthsComing}
            value={value}
            onFocus={(e) => {
                console.log("onFocus", {
                    event: e,
                });
            }}
            onBlur={(e) => {
                console.log("onBlur", {
                    event: e,
                });
            }}
            onChange={(e) => {
                setValue(e.target.value);
                console.log("onChange", {
                    event: e,
                });
            }}
        />
    );
};
