import type { FC } from "react";
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
