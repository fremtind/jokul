import clsx from "clsx";
import React, { forwardRef } from "react";
import { useId } from "../../hooks/useId/useId.js";
import type { BaseRadioButtonProps } from "./types.js";

export const BaseRadioButton = forwardRef<
    HTMLInputElement,
    BaseRadioButtonProps
>((props, ref) => {
    const {
        id,
        className,
        checked,
        children,
        label,
        inline,
        invalid,
        name,
        value,
        onChange,
        ...rest
    } = props;

    const inputId = useId(id || "jkl-radio-button", { generateSuffix: !id });

    return (
        <div
            className={clsx("jkl-radio-button", className, {
                "jkl-radio-button--inline": inline,
                "jkl-radio-button--error": invalid,
            })}
        >
            <label
                data-testid="jkl-radio-button__label-tag"
                htmlFor={inputId}
                className="jkl-radio-button__label"
            >
                {label || children}
            </label>
            <input
                name={name}
                ref={ref}
                {...rest}
                id={inputId}
                className="jkl-radio-button__input"
                type="radio"
                onChange={onChange}
                value={value}
                checked={checked}
                aria-invalid={invalid || rest["aria-invalid"]}
            />
        </div>
    );
});

BaseRadioButton.displayName = "BaseRadioButton";
