import React, { type FC, useState } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { Help } from "../../help/index.js";
import type { LabelVariant } from "../../input-group/types.js";
import { DateInput } from "../DateInput.js";
import { toValidInputValue } from "../utils.js";

export const dateInputExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Med hjelpetekst", "Med feil", "Med tooltip"],
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

export const DateInputExample: FC<ExampleComponentProps> = ({
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
        <Help buttonText="Når gjelder forsikringen fra?">
            Du vil være forsikret fra denne datoen. Du kan ikke velge en dato
            som har vært.
        </Help>
    ) : undefined;

    const [value, setValue] = useState<string>("");

    return (
        <DateInput
            label="Velg startdato for forsikringen"
            labelProps={{ variant }}
            tooltip={tooltip}
            errorLabel={errorLabel}
            name="date-input"
            helpLabel={helpLabel}
            min={toValidInputValue(new Date(Date.now() - monthsIsh(14)))}
            max={toValidInputValue(new Date(Date.now() + monthsIsh(14)))}
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
