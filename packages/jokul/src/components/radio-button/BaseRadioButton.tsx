import clsx from "clsx";
import { forwardRef } from "react";
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
        density,
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
            data-density={density}
        >
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
            />
            <label
                data-testid="jkl-radio-button__label-tag"
                htmlFor={inputId}
                className="jkl-radio-button__label"
            >
                <span aria-hidden className="jkl-radio-button__dot" />
                <span className="jkl-radio-button__text">
                    {label || children}
                </span>
            </label>
        </div>
    );
});

BaseRadioButton.displayName = "BaseRadioButton";
