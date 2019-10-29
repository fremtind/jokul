import React, { FocusEvent } from "react";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { TextInputProps } from "./index";

interface Props extends TextInputProps {
    onBlur?: (value: FocusEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    helpLabel?: string;
    errorLabel?: string;
}

export const TextArea = ({
    id,
    variant,
    label,
    className,
    helpLabel,
    errorLabel,
    rows = 7,
    placeholder = " ",
    forceCompact,
    ...restProps
}: Props) => {
    const componentClassName = "jkl-text-field jkl-text-area".concat(
        forceCompact ? ` jkl-text-field--compact` : "",
        className ? ` ${className}` : "",
    );

    return (
        <label data-testid="jkl-text-field" className={componentClassName}>
            <Label variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <textarea
                aria-invalid={!!errorLabel}
                className={`jkl-text-field__input jkl-text-field__input--${rows}-rows`}
                id={id}
                placeholder={placeholder}
                {...restProps}
            />
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </label>
    );
};
