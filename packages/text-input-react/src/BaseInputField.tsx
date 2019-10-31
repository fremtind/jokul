import React from "react";
import { getWidthAsStyle } from "./utils";
import { BaseInputProps } from "./utils";

interface Props extends BaseInputProps {
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
    invalid?: boolean;
}

export const BaseInputField = ({
    type = "text",
    id,
    placeholder,
    readOnly,
    value,
    maxLength,
    width,
    invalid,
    ...rest
}: Props) => {
    const style = getWidthAsStyle(width, maxLength);

    return (
        <input
            type={type}
            aria-invalid={invalid}
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
