import type { FieldGroupProps } from "@fremtind/jkl-field-group-react";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import React, { ChangeEventHandler, FC } from "react";
import { RadioGroupContextProvider } from "./radioGroupContext";

export interface RadioButtonGroupProps extends Omit<FieldGroupProps, "onChange"> {
    legend: string;
    /** Alle RadioButton i gruppen får dette som name. */
    name?: string;
    /** Om gruppen skal være controlled setter du den valgte verdien her. */
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    helpLabel?: string;
    /**
     * Erstatter hjelpeteksten (hvis noen) med en feilmelding.
     * Merker samtidig alle RadioButton i gruppen som ugyldige.
     */
    errorLabel?: string;
    /**
     * Setter inline-modifieren på alle RadioButton i gruppen.
     * @default false
     */
    inline?: boolean;
    /**
     * Setter kompakt-modifieren på gruppen og alle RadioButton i den.
     * @default false
     */
    forceCompact?: boolean;
}

export const RadioButtonGroup: FC<RadioButtonGroupProps> = (props) => {
    const {
        name,
        value,
        onChange,
        errorLabel,
        inline = false,
        forceCompact = false,
        labelProps = { variant: "medium" },
        ...rest
    } = props;

    return (
        <RadioGroupContextProvider
            state={{
                onChange,
                value,
                name,
                invalid: Boolean(errorLabel),
                inline,
                forceCompact: forceCompact,
            }}
        >
            <FieldGroup
                errorLabel={errorLabel}
                labelProps={{ forceCompact, ...labelProps }}
                data-testid="jkl-radio-button-group"
                {...rest}
            />
        </RadioGroupContextProvider>
    );
};
