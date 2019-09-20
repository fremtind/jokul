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
    placeholder?: string;
    variant?: "secondary" | "small";
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
    const [isFocused, setIsFocused] = useState(false);

    const height = isFocused || restProps.value ? `${rows * 2 + 0.5}rem` : undefined;

    const composedClassNames = "jkl-text-field jkl-text-area"
        .concat(variant ? ` jkl-text-field--${variant}` : "")
        .concat(className ? ` ${className}` : "");

    function onBlur(event: FocusEvent<HTMLTextAreaElement>) {
        setIsFocused(false);
        restProps.onBlur && restProps.onBlur(event);
    }

    function onFocus() {
        return setIsFocused(true);
    }

    return (
        <label data-testid="jkl-text-field" className={composedClassNames}>
            <span className="jkl-text-field__label">{label}</span>
            <textarea
                onFocus={onFocus}
                onBlur={onBlur}
                style={{ height }}
                aria-invalid={!!errorLabel}
                className="jkl-text-field__input"
                id={id}
                placeholder={placeholder}
                {...restProps}
            />
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />
        </label>
    );
};
