import React, { ChangeEvent, useState, FocusEvent } from "react";
import { SupportText } from "@fremtind/jkl-typography-react";

interface Props {
    label: string;
    value?: string;
    onChange?: (value: ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (value: FocusEvent<HTMLTextAreaElement>) => void;
    className?: string;
    isInvalid?: boolean;
    id?: string;
    required?: boolean;
    helpText?: string;
    errorText?: string;
    rows?: number;
}

export const TextArea = ({
    isInvalid = false,
    id,
    label,
    className = "",
    helpText,
    errorText,
    rows = 7,
    ...restProps
}: Props) => {
    const [isFocused, setIsFocused] = useState(false);

    let height = isFocused || restProps.value ? `${rows * 2 + 0.5}rem` : undefined;

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
                aria-invalid={isInvalid}
                className="jkl-text-field__input"
                id={id}
                placeholder=" "
                {...restProps}
            />
            <span className="jkl-text-field__label">{label}</span>
            <SupportText helpText={helpText} errorText={errorText} isInvalid={isInvalid} />
        </label>
    );
};
