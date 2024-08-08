import { DataTestAutoId, Density } from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import clsx from "clsx";
import React, {
    ReactNode,
    forwardRef,
    ChangeEventHandler,
    FocusEventHandler,
    InputHTMLAttributes,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";

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
    indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
    const {
        id,
        children,
        invalid,
        className,
        inline = false,
        density,
        "data-testautoid": testAutoId,
        checked,
        indeterminate,
        ...rest
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!, []);

    const inputId = useId(id || "jkl-checkbox", { generateSuffix: !id });

    useEffect(() => {
        if (checked === true && indeterminate === true && process.env.NODE_ENV !== "production") {
            console.warn("A Checkbox can not be both checked and indeterminate, and will be treated as checked");
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
            data-density={density}
        >
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
            <label htmlFor={inputId} className="jkl-checkbox__label">
                <span className="jkl-checkbox__mark">
                    <span className="jkl-checkbox__indeterminate-mark" />
                    <span className="jkl-checkbox__check-mark" />
                </span>
                <span className="jkl-checkbox__text">{children}</span>
            </label>
        </div>
    );
});

Checkbox.displayName = "Checkbox";
