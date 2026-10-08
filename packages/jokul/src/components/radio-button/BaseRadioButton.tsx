import clsx from "clsx";
import React, { forwardRef } from "react";
import { useId } from "../../hooks/useId/useId.js";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
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
        tracking,
        trackingComponentName,
        trackingLabel: trackingLabelProp,
        trackingExtraProps,
        disableDefaultTrackingProps = false,
        ...rest
    } = props;

    const inputId = useId(id || "jkl-radio-button", { generateSuffix: !id });
    const trackingLabel = trackingLabelProp ?? label ?? children;

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
                type="radio"
                onChange={onChange}
                value={value}
                checked={checked}
                aria-invalid={invalid || rest["aria-invalid"]}
                {...getExtraTrackingAttributes(tracking?.extra)}
                data-track-component-name={
                    trackingComponentName ?? COMPONENT_NAMES.RadioButton
                }
                data-track-id={
                    tracking?.id ??
                    (trackingLabel ? String(trackingLabel) : undefined)
                }
                data-track-label={
                    trackingLabel ? String(trackingLabel) : undefined
                }
                data-track-checked={
                    disableDefaultTrackingProps ? undefined : checked
                }
                {...trackingExtraProps}
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
