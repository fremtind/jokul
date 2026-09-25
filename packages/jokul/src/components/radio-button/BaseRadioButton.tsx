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
        tracking,
        value,
        onChange,
        "data-jkl-tracked": trackedName = "RadioButton",
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
            <input
                name={name}
                ref={ref}
                {...rest}
                id={inputId}
                className="jkl-radio-button__input"
                // Merker radioknappen som sporbar for Mixpanels
                // `autocapture`. Attributtene er ellers inerte når ingen
                // Mixpanel-instans er initialisert.
                data-jkl-tracked={trackedName}
                data-jkl-checked={checked || undefined}
                data-jkl-tracking={
                    tracking ? JSON.stringify(tracking) : undefined
                }
                type="radio"
                onChange={onChange}
                value={value}
                checked={checked}
                aria-invalid={invalid || rest["aria-invalid"]}
            />
            <label
                data-testid="jkl-radio-button__label-tag"
                htmlFor={inputId}
                className="jkl-radio-button__label"
            >
                {label || children}
            </label>
        </div>
    );
});

BaseRadioButton.displayName = "BaseRadioButton";
