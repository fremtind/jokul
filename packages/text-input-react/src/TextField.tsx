import React from "react";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { TextInputProps } from "./index";
import { getWidthAsStyle } from "./index";

interface Props extends TextInputProps {
    helpLabel?: string;
    errorLabel?: string;
}

export const TextField = ({
    type = "text",
    readOnly = false,
    helpLabel,
    errorLabel,
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
    const componentClassName = "jkl-text-field".concat(
        forceCompact ? " jkl-text-field--compact" : "",
        className ? ` ${className}` : "",
    );
    return (
        <label data-testid="jkl-text-field" className={componentClassName}>
            <Label variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <input
                type={type}
                aria-invalid={!!errorLabel}
                className={`jkl-text-field__input`}
                id={id}
                placeholder={placeholder}
                readOnly={readOnly}
                value={value}
                maxLength={maxLength}
                style={getWidthAsStyle(width, maxLength)}
                {...rest}
            />
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </label>
    );
};
