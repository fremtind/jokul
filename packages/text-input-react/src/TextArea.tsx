import React, { ChangeEvent, useState, FocusEvent } from "react";

interface Props {
    value?: string;
    onChange?: (value: ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (value: FocusEvent<HTMLTextAreaElement>) => void;
    className?: string;
    id?: string;
    required?: boolean;
    rows?: number;
}

export const TextArea = ({ id, className = "", rows = 7, ...restProps }: Props) => {
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
        <textarea
            onFocus={onFocus}
            onBlur={onBlur}
            style={{ height }}
            className={`jkl-text-field jkl-text-field--text-area ${className ? className : ""}`}
            id={id}
            placeholder=" "
            {...restProps}
        />
    );
};
