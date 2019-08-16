import React, { ChangeEvent, useState, FocusEvent } from "react";
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
}

export const TextArea = ({ id, label, className = "", helpLabel, errorLabel, rows = 7, ...restProps }: Props) => {
    const [isFocused, setIsFocused] = useState(false);

    const height = isFocused || restProps.value ? `${rows * 2 + 0.5}rem` : undefined;

    function onBlur(event: FocusEvent<HTMLTextAreaElement>) {
        setIsFocused(false);
        restProps.onBlur && restProps.onBlur(event);
    }

    function onFocus() {
        return setIsFocused(true);
    }

    return (
        <label data-testid="jkl-text-field" className={`jkl-text-field jkl-text-area ${className}`}>
            <textarea
                onFocus={onFocus}
                onBlur={onBlur}
                style={{ height }}
                aria-invalid={!!errorLabel}
                className="jkl-text-field__input"
                id={id}
                placeholder=" "
                {...restProps}
            />
            <span className="jkl-text-field__label">{label}</span>
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />
        </label>
    );
};
