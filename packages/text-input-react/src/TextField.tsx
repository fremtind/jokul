import React, { ChangeEvent } from "react";
import { SupportText } from "./SupportText";

interface Props {
    label: string;
    value?: string;
    inline?: boolean;
    helpText?: string;
    errorText?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
    isInvalid?: boolean;
    id?: string;
    autoComplete?: string;
    required?: boolean;
    readOnly?: boolean;
    className?: string;
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
            {...rest}
        />
        <span className="jkl-text-field__label">{label}</span>
        <SupportText helpText={helpText} errorText={errorText} isInvalid={isInvalid} />
    </label>
);
