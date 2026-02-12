import React, { type FC } from "react";
import { FieldGroup } from "../input-group/FieldGroup.js";
import { RadioGroupContextProvider } from "./radioGroupContext.js";
import type { RadioButtonGroupProps } from "./types.js";

export const RadioButtonGroup: FC<RadioButtonGroupProps> = (props) => {
    const {
        name,
        value,
        onChange,
        errorLabel,
        inline = false,
        legendProps = { "data-size": "medium" },
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
            }}
        >
            <FieldGroup
                errorLabel={errorLabel}
                legendProps={legendProps}
                data-testid="jkl-radio-button-group"
                {...rest}
                role="radiogroup"
                aria-invalid={Boolean(errorLabel)}
            />
        </RadioGroupContextProvider>
    );
};
