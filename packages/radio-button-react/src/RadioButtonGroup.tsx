import { Density } from "@fremtind/jkl-core";
import {
    FieldGroup,
    type FieldGroupProps,
} from "@fremtind/jkl-input-group-react";
import React, { ChangeEventHandler, FC } from "react";
import { RadioGroupContextProvider } from "./radioGroupContext";

export interface RadioButtonGroupProps
    extends Omit<FieldGroupProps, "onChange"> {
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
    density?: Density;
}

export const RadioButtonGroup: FC<RadioButtonGroupProps> = (props) => {
    const {
        name,
        value,
        onChange,
        errorLabel,
        inline = false,
        density,
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
                density,
            }}
        >
            <FieldGroup
                errorLabel={errorLabel}
                labelProps={labelProps}
                data-testid="jkl-radio-button-group"
                density={density}
                {...rest}
                role="radiogroup"
                aria-invalid={Boolean(errorLabel)}
            />
        </RadioGroupContextProvider>
    );
};
