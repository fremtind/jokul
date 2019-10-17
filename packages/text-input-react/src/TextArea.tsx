import React, { ChangeEvent, FocusEvent } from "react";
import { LabelVariant } from "@fremtind/jkl-core";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";

interface Props {
    label: string;
    value?: string;
    onChange?: (value: ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (value: FocusEvent<HTMLTextAreaElement>) => void;
    className?: string;
    id?: string;
    required?: boolean;
    helpLabel?: string;
    errorLabel?: string;
    rows?: number;
    placeholder?: string;
    variant?: LabelVariant;
    forceCompact?: boolean;
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
