import clsx from "clsx";
import React, { type ForwardedRef, forwardRef } from "react";
import { Checkbox } from "../checkbox/index.js";
import { RadioButton } from "../radio-button/index.js";
import type { InputPanelProps } from "./types.js";

export const InputPanel = forwardRef(function BasePanel(
    { className, description, type, label, amount, ...rest }: InputPanelProps,
    ref: ForwardedRef<HTMLInputElement>,
) {
    return (
        <div
            className={clsx("jkl-input-panel", `jkl-${type}-panel`, className)}
            ref={ref}
        >
            <div className="jkl-input-panel__header">
                {type === "checkbox" && <Checkbox {...rest}>{label}</Checkbox>}
                {type === "radio" && (
                    <RadioButton {...rest}>{label}</RadioButton>
                )}
                {amount && (
                    <span className="jkl-input-panel__header__amount">
                        {amount}
                    </span>
                )}
            </div>
            {description && (
                <div className="jkl-input-panel__description">
                    {description}
                </div>
            )}
        </div>
    );
});
