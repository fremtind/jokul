import React, { forwardRef, InputHTMLAttributes, ChangeEventHandler, ReactNode } from "react";
import { BaseRadioButton } from "./BaseRadioButton";
import { useRadioGroupContext } from "./radioGroupContext";

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "children"> {
    children?: ReactNode;
    value: string;
    /** Kan også settes på RadioButtonGroup, men settes på RadioButton f. eks. av react-hook-form */
    name?: string;
    /** Kan også settes på RadioButtonGroup, men settes på RadioButton f. eks. av react-hook-form */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /** @deprecated Bruk children */
    label?: ReactNode;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>((props, ref) => {
    const { checked, value, ...rest } = props;
    const { value: selectedValue, ...context } = useRadioGroupContext();

    return (
        <BaseRadioButton
            {...rest}
            {...context}
            ref={ref}
            checked={
                typeof checked !== "undefined"
                    ? checked
                    : typeof selectedValue !== "undefined"
                    ? value === selectedValue
                    : undefined
            }
            value={value}
        />
    );
});

RadioButton.displayName = "RadioButton";
