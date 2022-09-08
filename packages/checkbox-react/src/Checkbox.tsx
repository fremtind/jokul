import { DataTestAutoId, Density } from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { ReactNode, forwardRef, ChangeEventHandler, FocusEventHandler, InputHTMLAttributes } from "react";

export interface CheckboxProps extends DataTestAutoId, InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode;
    name: string;
    value: string;
    checked?: boolean;
    inline?: boolean;
    className?: string;
    density?: Density;
    invalid?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
    const { id, children, invalid, className, inline = false, density, "data-testautoid": testAutoId, ...rest } = props;

    const inputId = useId(id || "jkl-checkbox", { generateSuffix: !id });

    return (
        <div
            className={cn("jkl-checkbox", className, {
                "jkl-checkbox--inline": inline,
                "jkl-checkbox--error": invalid,
            })}
            data-density={density}
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
});

Checkbox.displayName = "Checkbox";
