import React, { ChangeEvent, FocusEvent } from "react";

interface Props {
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
    id?: string;
    autoComplete?: string;
    required?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    invalid?: boolean;
    chars?: number;
}

export const TextField = ({
    type = "text",
    readOnly = false,
    id,
    placeholder,
    value,
    invalid,
    chars,
    ...rest
}: Props) => (
    <input
        type={type}
        className={`jkl-text-field`}
        aria-invalid={!!invalid}
        id={id}
        placeholder={placeholder}
        readOnly={readOnly}
        value={value}
        style={{ width: `${chars && chars + 2}ch` }}
        {...rest}
    />
);
