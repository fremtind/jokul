import React, { ChangeEvent } from "react";

interface Props {
    label: string;
    value: string;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    type?: "text" | "number" | "tel" | "password" | "email";
    isInvalid?: boolean;
    id?: string;
    autoComplete?: string;
    required?: boolean;
}

export const TextField = ({ type = "text", isInvalid = false, id, label, ...rest }: Props) => {
    return (
        <label className={`jkl-text-field`}>
            <input
                type={type}
                aria-invalid={isInvalid}
                className="jkl-text-field__input"
                id={id}
                placeholder=" "
                {...rest}
            />
            <span className="jkl-text-field__label">{label}</span>
            <span className="jkl-text-field__border"></span>
        </label>
    );
};
