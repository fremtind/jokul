import clsx from "clsx";
import React, { type ForwardedRef, forwardRef } from "react";
import { useId } from "../../hooks/useId/useId.js";
import { Checkbox } from "../checkbox/Checkbox.js";
import { COMPONENT_NAMES } from "../metadata.js";
import { BaseRadioButton } from "../radio-button/BaseRadioButton.js";
import { useInputCardGroupContext } from "./inputCardGroupContext.js";
import type { InputCardProps } from "./types.js";

export const InputCard = forwardRef(function InputCard(
    {
        id,
        type,
        label,
        description,
        illustration,
        invalid,
        className,
        value,
        name,
        checked,
        onChange,
        "data-size": dataSize,
        "data-theme": dataTheme,
        "data-brand": dataBrand,
        "data-color": dataColor,
        trackingProps,
        ...rest
    }: InputCardProps,
    ref: ForwardedRef<HTMLInputElement>,
) {
    const group = useInputCardGroupContext();
    const inputId = useId(id || "jkl-input-card", { generateSuffix: !id });
    const descriptionId = `${inputId}_description`;
    const isInvalid = invalid ?? group.invalid;
    const isControlledByGroup =
        type === "radio" &&
        checked === undefined &&
        group.value !== undefined &&
        value !== undefined;
    const Control = type === "radio" ? BaseRadioButton : Checkbox;
    const trackingLabel = typeof label === "string" ? label : undefined;

    return (
        <div
            className={clsx("jkl-input-card", className)}
            data-size={dataSize}
            data-theme={dataTheme}
            data-brand={dataBrand}
            data-color={dataColor}
        >
            {illustration && (
                <div
                    className="jkl-input-card__illustration"
                    aria-hidden="true"
                >
                    {illustration}
                </div>
            )}
            <Control
                {...rest}
                ref={ref}
                id={inputId}
                name={(name ?? group.name) as string}
                value={value as string}
                checked={isControlledByGroup ? group.value === value : checked}
                onChange={onChange ?? group.onChange}
                invalid={isInvalid || rest["aria-invalid"] === true}
                aria-describedby={
                    [rest["aria-describedby"], description && descriptionId]
                        .filter(Boolean)
                        .join(" ") || undefined
                }
                trackingProps={trackingProps}
                trackingComponentName={COMPONENT_NAMES.InputCard}
                trackingLabel={trackingLabel}
                trackingExtraProps={{ "data-track-type": type }}
                disableDefaultTrackingProps
            >
                {label}
            </Control>
            {description && (
                <span
                    className="jkl-input-card__description"
                    id={descriptionId}
                >
                    {description}
                </span>
            )}
        </div>
    );
});

InputCard.displayName = "InputCard";
