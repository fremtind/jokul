import clsx from "clsx";
import React, { type ForwardedRef, forwardRef } from "react";
import { Checkbox } from "../checkbox/index.js";
import { COMPONENT_NAMES } from "../metadata.js";
import { RadioButton } from "../radio-button/index.js";
import type { InputPanelProps } from "./types.js";

export const InputPanel = forwardRef(function BasePanel(
    {
        className,
        description,
        type,
        label,
        amount,
        value = label,
        name = "Panelvalg",
        children,
        extraLabel,
        alwaysOpen: _alwaysOpen,
        "data-size": dataSize,
        "data-theme": dataTheme,
        tracking,
        ...rest
    }: InputPanelProps,
    ref: ForwardedRef<HTMLInputElement>,
) {
    const componentName =
        type === "checkbox"
            ? COMPONENT_NAMES.CheckboxPanel
            : COMPONENT_NAMES.RadioPanel;
    const trackingExtraProps = {
        "data-track-type": type,
        "data-track-always-open": _alwaysOpen,
        "data-track-amount": amount,
    };

    return (
        <div
            className={clsx("jkl-input-panel", `jkl-${type}-panel`, className)}
            data-size={dataSize}
            data-theme={dataTheme}
        >
            <div className="jkl-input-panel__header">
                {type === "checkbox" && (
                    <Checkbox
                        value={value?.toString()}
                        name={name}
                        ref={ref}
                        tracking={tracking}
                        trackingComponentName={componentName}
                        trackingLabel={label}
                        trackingExtraProps={trackingExtraProps}
                        disableDefaultTrackingProps
                        {...rest}
                    >
                        {label}
                    </Checkbox>
                )}
                {type === "radio" && (
                    <RadioButton
                        value={value?.toString()}
                        name={name}
                        ref={ref}
                        tracking={tracking}
                        trackingComponentName={componentName}
                        trackingLabel={label}
                        trackingExtraProps={trackingExtraProps}
                        disableDefaultTrackingProps
                        {...rest}
                    >
                        {label}
                    </RadioButton>
                )}
                {(amount || extraLabel) && (
                    <span className="jkl-input-panel__header__amount">
                        {amount || extraLabel}
                    </span>
                )}
            </div>
            {(description || children) && (
                <div className="jkl-input-panel__description">
                    {description || children}
                </div>
            )}
        </div>
    );
});
