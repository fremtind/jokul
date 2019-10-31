import React from "react";
import { getWidthAsStyle } from "./utils";
import { BaseInputProps } from "./utils";

interface Props extends BaseInputProps {
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
    errorLabel?: string;
}

export const BaseInputField = ({
    type = "text",
    errorLabel,
    id,
    placeholder,
    readOnly,
    value,
    maxLength,
    width,
    ...rest
}: Props) => {
    const style = getWidthAsStyle(width, maxLength);

    return (
        <input
            type={type}
            aria-invalid={!!errorLabel}
            className="jkl-text-field__input"
            id={id}
            placeholder={placeholder}
            readOnly={readOnly}
            value={value}
            maxLength={maxLength}
            style={style}
            {...rest}
        />
    );
};
