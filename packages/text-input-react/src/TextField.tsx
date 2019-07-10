import React, { ChangeEvent } from "react";

interface Props {
    label: string;
    value?: string;
    onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
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
    isInvalid = false,
    readOnly = false,
    id,
    label,
    className = "",
    ...rest
}: Props) => {
    return (
        <label className={`jkl-text-field ${className}`}>
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
            <span className="jkl-text-field__border"></span>
        </label>
    );
};
