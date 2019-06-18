import React, { useState, ChangeEvent } from "react";
import uuid from "uuid/v4";

interface Props {
    label: string;
    className?: string;
    value: string;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    type?: "text" | "number" | "tel" | "password" | "email";
    isInvalid?: boolean;
    id?: string;
    disabled?: boolean;
    form?: string;
    pattern?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    required?: boolean;
    tabIndex?: number;
    maxLength?: number;
    minLength?: number;
}

export const TextField = ({ type = "text", isInvalid = false, id, label, className = "", ...rest }: Props) => {
    const [generatedId] = useState(uuid());

    return (
        <label className={`jkl-text-field ${className}`} htmlFor={id || generatedId}>
            <input
                type={type}
                aria-invalid={isInvalid}
                className="jkl-text-field__input"
                id={id || generatedId}
                placeholder=" "
                {...rest}
            />
            <span className="jkl-text-field__label">{label}</span>
            <span className="jkl-text-field__border"></span>
        </label>
    );
};
