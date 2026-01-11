import clsx from "clsx";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { useId } from "../../hooks/useId/useId.js";
import type { CheckboxProps } from "./types.js";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (props, ref) => {
        const {
            id,
            children,
            invalid,
            className,
            inline = false,
            "data-testautoid": testAutoId,
            checked,
            indeterminate,
            ...rest
        } = props;

        const inputRef = useRef<HTMLInputElement>(null);
        useImperativeHandle(
            ref,
            () => inputRef.current as HTMLInputElement,
            [],
        );

        const inputId = useId(id || "jkl-checkbox", { generateSuffix: !id });

        useEffect(() => {
            if (
                checked === true &&
                indeterminate === true &&
                process.env.NODE_ENV !== "production"
            ) {
                console.warn(
                    "A Checkbox can not be both checked and indeterminate, and will be treated as checked",
                );
            }
            if (inputRef.current) {
                inputRef.current.indeterminate = !checked && !!indeterminate;
            }
        }, [checked, indeterminate]);

        return (
            <div
                className={clsx("jkl-checkbox", className, {
                    "jkl-checkbox--inline": inline,
                    "jkl-checkbox--error": invalid,
                })}
            >
                <label htmlFor={inputId} className="jkl-checkbox__label">
                    {children}
                </label>
                <input
                    id={inputId}
                    ref={inputRef}
                    className="jkl-checkbox__input"
                    data-testid="jkl-checkbox-input"
                    aria-invalid={invalid}
                    type="checkbox"
                    data-testautoid={testAutoId}
                    checked={checked}
                    {...rest}
                />
            </div>
        );
    },
);

Checkbox.displayName = "Checkbox";
