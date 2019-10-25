import React, { ChangeEvent, FocusEvent, CSSProperties } from "react";
import { LabelVariant } from "@fremtind/jkl-core";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";

export interface Props {
    label: string;
    value?: string;
    inline?: boolean;
    helpLabel?: string;
    errorLabel?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
    id?: string;
    autoComplete?: string;
    required?: boolean;
    readOnly?: boolean;
    className?: string;
    placeholder?: string;
    variant?: LabelVariant;
    forceCompact?: boolean;
    maxLength?: number;
    width?: string;
}

export const TextField = ({
    type = "text",
    inline = false,
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
    // Give warning when errorLabel or helpLabel is used on an inline TextField
    if (process.env.NODE_ENV !== "production") {
        if (inline && (helpLabel || errorLabel)) {
            console.warn(
                "WARNING: Inline TextFields do not display help- or error labels! The errorLabel prop can still be used to trigger an invalid state, but the reason will have to be described elsewhere.",
            );
        }
    }

    const componentClassName = "jkl-text-field".concat(
        inline ? " jkl-text-field--inline" : "",
        forceCompact ? " jkl-text-field--compact" : "",
        className ? ` ${className}` : "",
    );
    function getWidthAsStyle(): CSSProperties | undefined {
        if (width) {
            return { width }; // prioritize width prop
        }

        if (maxLength && maxLength < 15) {
            return { width: `${maxLength + 3}ch` }; // else use maxLength if not large
        }

        return undefined;
    }
    return (
        <label data-testid="jkl-text-field" className={componentClassName}>
            <Label srOnly={inline} variant={variant} forceCompact={forceCompact}>
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
                style={getWidthAsStyle()}
                {...rest}
            />
            {!inline && <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />}
        </label>
    );
};
