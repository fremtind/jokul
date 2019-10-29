import React from "react";
import { TextInputProps } from "./index";
import { Label } from "@fremtind/jkl-typography-react";
import { getWidthAsStyle } from "./index";

interface Props extends TextInputProps {
    invalid?: boolean;
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
}

export const InlineTextField = ({
    type = "text",
    readOnly = false,
    invalid,
    id,
    label,
    className,
    placeholder,
    value,
    variant,
    forceCompact,
    maxLength,
    width,
    ...rest
}: Props) => {
    const componentClassName = "jkl-text-field jkl-text-field--inline".concat(
        forceCompact ? " jkl-text-field--compact" : "",
        className ? ` ${className}` : "",
    );

    return (
        <label data-testid="jkl-text-field" className={componentClassName}>
            <Label srOnly variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <input
                type={type}
                aria-invalid={invalid}
                className="jkl-text-field__input"
                id={id}
                placeholder={placeholder}
                readOnly={readOnly}
                value={value}
                maxLength={maxLength}
                style={getWidthAsStyle(width, maxLength)}
                {...rest}
            />
        </label>
    );
};
