import React, { ChangeEvent, FocusEvent } from "react";
import { SupportText } from "@fremtind/jkl-typography-react";

interface Props {
    label: string;
    value?: string;
    inline?: boolean;
    helpText?: string;
    errorText?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
    isInvalid?: boolean;
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
    isInvalid = false,
    readOnly = false,
    helpText,
    errorText,
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
            aria-invalid={isInvalid}
            className={`jkl-text-field__input`}
            id={id}
            placeholder=" "
            readOnly={readOnly}
            value={value}
            {...rest}
        />
        {!value && <span className="jkl-text-field__placeholder">{placeholder}</span>}
        <span className="jkl-text-field__label">{label}</span>
        <SupportText helpText={helpText} errorText={errorText} isInvalid={isInvalid} />
    </label>
);
