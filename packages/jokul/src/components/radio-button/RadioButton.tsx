import React, { forwardRef, InputHTMLAttributes, ChangeEventHandler, ReactNode } from "react";
import { useId } from "../../hooks";
import { SupportLabel, SupportLabelProps } from "../input-group";
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
    helpLabel?: ReactNode;
    supportLabelProps?: Omit<SupportLabelProps, "id" | "errorLabel" | "helpLabel" | "density">;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>((props, ref) => {
    const { checked, value, supportLabelProps, helpLabel, ...rest } = props;
    const { value: selectedValue, density, ...context } = useRadioGroupContext();
    const supportId = useId("jkl-support-label");

    return (
        <>
            <BaseRadioButton
                {...context}
                {...rest}
                ref={ref}
                checked={
                    typeof checked !== "undefined"
                        ? checked
                        : typeof selectedValue !== "undefined"
                        ? value === selectedValue
                        : undefined
                }
                value={value}
                aria-describedby={helpLabel ? supportId : undefined}
            />
            <SupportLabel
                {...supportLabelProps}
                label={helpLabel}
                labelType={"help"}
                id={supportId}
                density={density}
            />
        </>
    );
});

RadioButton.displayName = "RadioButton";
