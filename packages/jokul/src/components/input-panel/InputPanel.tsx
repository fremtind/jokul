import clsx from "clsx";
import React, { type ForwardedRef, forwardRef } from "react";
import { Checkbox } from "../checkbox/index.js";
import { RadioButton } from "../radio-button/index.js";
import type { InputPanelProps } from "./types.js";

export const InputPanel = forwardRef(function BasePanel(
    { className, children, type, label, amount, ...rest }: InputPanelProps,
    ref: ForwardedRef<HTMLInputElement>,
) {
    return (
        <article
            className={clsx("jkl-input-panel", `jkl-${type}-panel`, className)}
            ref={ref}
        >
            <header className="jkl-input-panel__header">
                {type === "checkbox" && <Checkbox {...rest}>{label}</Checkbox>}
                {type === "radio" && (
                    <RadioButton {...rest}>{label}</RadioButton>
                )}
                {amount && (
                    <span className="jkl-input-panel__header__amount">
                        {amount}
                    </span>
                )}
            </header>
            {children && (
                <section className="jkl-input-panel__additional-content">
                    {children}
                </section>
            )}
        </article>
    );
});
