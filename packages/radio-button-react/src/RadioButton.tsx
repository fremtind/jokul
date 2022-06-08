import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { forwardRef, InputHTMLAttributes, ChangeEventHandler, ReactNode } from "react";
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
    const { className, checked, children, label, value, ...rest } = props;
    const inputId = useId("jkl-radio-button");

    const { name, inline, invalid, forceCompact, value: selectedValue, onChange } = useRadioGroupContext();

    return (
        <div
            className={cn("jkl-radio-button", className, {
                "jkl-radio-button--compact": forceCompact,
                "jkl-radio-button--inline": inline,
                "jkl-radio-button--error": invalid,
            })}
        >
            <input
                name={name}
                ref={ref}
                {...rest}
                id={inputId}
                className="jkl-radio-button__input"
                type="radio"
                onChange={onChange || rest.onChange}
                value={value}
                checked={
                    typeof checked !== "undefined"
                        ? checked
                        : typeof selectedValue !== "undefined"
                        ? value === selectedValue
                        : undefined
                }
            />
            <label data-testid="jkl-radio-button__label-tag" htmlFor={inputId} className="jkl-radio-button__label">
                <span aria-hidden className="jkl-radio-button__dot" />
                <span className="jkl-radio-button__text">{label || children}</span>
            </label>
        </div>
    );
});

RadioButton.displayName = "RadioButton";
