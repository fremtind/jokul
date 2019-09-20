import React, { ChangeEvent, FocusEvent } from "react";
import { SupportLabel } from "@fremtind/jkl-typography-react";

interface Props {
    label: string;
    value?: string;
    inline?: boolean;
    helpLabel?: string;
    errorLabel?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
    id?: string;
    autoComplete?: string;
    required?: boolean;
    readOnly?: boolean;
    className?: string;
    placeholder?: string;
    variant?: "secondary" | "small";
}

export const TextField = ({
    type = "text",
    inline = false,
    readOnly = false,
    helpLabel,
    errorLabel,
    id,
    label,
    className,
    placeholder,
    value,
    variant,
    ...rest
}: Props) => {
    const composedClassNames = "jkl-text-field"
        .concat(inline ? " jkl-text-field--inline" : "")
        .concat(variant ? ` jkl-text-field--${variant}` : "")
        .concat(className ? ` ${className}` : "");
    return (
        <label data-testid="jkl-text-field" className={composedClassNames}>
            <span className="jkl-text-field__label">{label}</span>
            <input
                type={type}
                aria-invalid={!!errorLabel}
                className={`jkl-text-field__input`}
                id={id}
                placeholder={placeholder}
                readOnly={readOnly}
                value={value}
                {...rest}
            />
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />
        </label>
    );
};
