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
}

export const TextField = ({
    type = "text",
    inline = false,
    readOnly = false,
    helpLabel,
    errorLabel,
    id,
    label,
    className = "",
    placeholder,
    value,
    ...rest
}: Props) => (
    <label
        data-testid="jkl-text-field"
        className={`jkl-text-field${inline ? " jkl-text-field--inline" : ""} ${className}`}
    >
        <input
            type={type}
            aria-invalid={!!errorLabel}
            className={`jkl-text-field__input`}
            id={id}
            placeholder=" "
            readOnly={readOnly}
            value={value}
            {...rest}
        />
        {!value && placeholder && <span className="jkl-text-field__placeholder">{placeholder}</span>}
        <span className="jkl-text-field__label">{label}</span>
        <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />
    </label>
);
