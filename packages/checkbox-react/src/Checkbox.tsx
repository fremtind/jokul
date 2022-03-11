import React, { ReactNode, forwardRef, ChangeEventHandler, FocusEventHandler, InputHTMLAttributes } from "react";
import cn from "classnames";
import { useId } from "@fremtind/jkl-react-hooks";
import { DataTestAutoId } from "@fremtind/jkl-core";

export interface CheckboxProps extends DataTestAutoId, InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode;
    name: string;
    value: string;
    checked?: boolean;
    inline?: boolean;
    className?: string;
    forceCompact?: boolean;
    invalid?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        { id, children, invalid, className, inline = false, forceCompact, "data-testautoid": testAutoId, ...rest },
        ref,
    ) => {
        const inputId = useId(id || "jkl-checkbox", { generateSuffix: !id });

        return (
            <div
                className={cn("jkl-checkbox", className, {
                    "jkl-checkbox--compact": forceCompact,
                    "jkl-checkbox--inline": inline,
                    "jkl-checkbox--error": invalid,
                })}
            >
                <input
                    id={inputId}
                    ref={ref}
                    className="jkl-checkbox__input"
                    data-testid="jkl-checkbox-input"
                    aria-invalid={invalid}
                    type="checkbox"
                    data-testautoid={testAutoId}
                    {...rest}
                />
                <label htmlFor={inputId} className="jkl-checkbox__label">
                    <span className="jkl-checkbox__check-mark" />
                    <span className="jkl-checkbox__check-text">{children}</span>
                </label>
            </div>
        );
    },
);
Checkbox.displayName = "Checkbox";
