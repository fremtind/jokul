import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import React, { type FC, useState } from "react";
import type { LabelVariant } from "../../input-group/types.js";
import { PopupTip } from "../../tooltip/PopupTip.js";
import { DatePicker } from "../DatePicker.js";
import { formatInput, isBlurTargetOutside } from "../utils.js";

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

const monthsIsh = (num: number) => {
    const raw = 1000 * 60 * 60 * 24 * (num * 30 - 5);
    return raw < 0 ? 12 + raw : raw;
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
        <PopupTip content="Du vil være forsikret fra denne datoen. Du kan ikke velge en dato som har vært." />
    ) : undefined;

    const [value, setValue] = useState<string>("");

    return (
        <DatePicker
            label="Velg startdato for forsikringen"
            labelProps={{ variant }}
            tooltip={tooltip}
            errorLabel={errorLabel}
            name="datepicker"
            helpLabel={helpLabel}
            disableBeforeDate={formatInput(
                new Date(Date.now() - monthsIsh(14)),
            )}
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
