import React, { ChangeEvent, FocusEvent } from "react";
import { LabelVariant } from "@fremtind/jkl-core";
import { SupportLabel } from "@fremtind/jkl-typography-react";

interface Props {
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
    ...rest
}: Props) => {
    const componentClassName = "jkl-text-field".concat(
        inline ? " jkl-text-field--inline" : "",
        forceCompact ? " jkl-text-field--compact" : "",
        className ? ` ${className}` : "",
    );
    const labelClassName = "jkl-label".concat(
        variant ? ` jkl-label--${variant}` : "",
        forceCompact ? " jkl-label--compact" : "",
    );
    return (
        <label data-testid="jkl-text-field" className={componentClassName}>
            <span className={labelClassName}>{label}</span>
            <input
                type={type}
                aria-invalid={!!errorLabel}
                className={`jkl-text-field__input`}
                id={id}
                placeholder={placeholder}
                readOnly={readOnly}
                value={value}
                {...rest}
            />
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </label>
    );
};
