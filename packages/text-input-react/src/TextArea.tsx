import React, { ChangeEvent, FocusEvent } from "react";
import { LabelVariant } from "@fremtind/jkl-core";
import { SupportLabel } from "@fremtind/jkl-typography-react";

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
    ...restProps
}: Props) => {
    const componentClassName = "jkl-text-field jkl-text-area".concat(className ? ` ${className}` : "");
    const labelClassName = "jkl-label".concat(variant ? ` jkl-label--${variant}` : "");

    return (
        <label data-testid="jkl-text-field" className={componentClassName}>
            <span className={labelClassName}>{label}</span>
            <textarea
                aria-invalid={!!errorLabel}
                className={`jkl-text-field__input jkl-text-field__input--${rows}-rows`}
                id={id}
                placeholder={placeholder}
                {...restProps}
            />
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />
        </label>
    );
};
