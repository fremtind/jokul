import clsx from "clsx";
import React, { type ForwardedRef, forwardRef } from "react";
import { Checkbox } from "../checkbox/index.js";
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
        alwaysOpen = false,
        "data-size": dataSize,
        "data-theme": dataTheme,
        ...rest
    }: InputPanelProps,
    ref: ForwardedRef<HTMLInputElement>,
) {
    return (
        <div
            className={clsx("jkl-input-panel", `jkl-${type}-panel`, className)}
            data-always-open={alwaysOpen}
            data-size={dataSize}
            data-theme={dataTheme}
        >
            <div className="jkl-input-panel__header">
                {type === "checkbox" && (
                    <Checkbox
                        value={value?.toString()}
                        name={name}
                        ref={ref}
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
