import React, { type FC, useState } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { NumberInput } from "../NumberInput.js";

export const numberInputExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        "Med hjelpetekst",
        "Med feil",
        "Med stepper",
        "Disabled",
        "Read only",
    ],
};

export const NumberInputExample: FC<ExampleComponentProps> = ({
    boolValues,
}) => {
    const [value, setValue] = useState<string | number>(2);

    const helpLabel = boolValues?.["Med hjelpetekst"]
        ? "Du kan legge til opptil 4 personer på samme bestilling."
        : undefined;
    const errorLabel = boolValues?.["Med feil"]
        ? "Du kan maksimalt velge 4 reisende."
        : undefined;
    const isDisabled = boolValues?.Disabled;
    const isReadOnly = boolValues?.["Read only"];
    const stepper = boolValues?.["Med stepper"];

    return (
        <div style={{ display: "grid", gap: "16px", maxWidth: "24rem" }}>
            <NumberInput
                label="Antall reisende"
                description="Velg hvor mange som skal dekkes av forsikringen."
                min={1}
                max={4}
                step={1}
                helpLabel={helpLabel}
                errorLabel={errorLabel}
                disabled={isDisabled}
                readOnly={isReadOnly}
                stepper={stepper}
                value={value}
                onChange={(event) => {
                    const nextValue = event.target.value;

                    setValue(nextValue === "" ? "" : Number(nextValue));
                }}
            />
            <div
                data-testid="number-input-summary"
                style={{
                    display: "grid",
                    gap: "4px",
                    padding: "16px",
                    borderRadius: "12px",
                    background: "var(--jkl-color-background-container-low)",
                }}
            >
                <strong>
                    {value === "" ? "Ingen verdi valgt" : `${value} reisende`}
                </strong>
                <span>
                    Estimert pris:{" "}
                    {value === ""
                        ? "0 kr per måned"
                        : `${Number(value) * 129} kr per måned`}
                </span>
            </div>
        </div>
    );
};
