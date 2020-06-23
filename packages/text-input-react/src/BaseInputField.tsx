import React, { ChangeEventHandler, FocusEventHandler, CSSProperties, forwardRef, KeyboardEventHandler } from "react";

export interface BaseProps {
    id?: string;
    className?: string;
    maxLength?: number;
    width?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyUp?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyPress?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    placeholder?: string;
    readOnly?: boolean;
    autoComplete?: string;
    required?: boolean;
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
    name?: string;
}

export interface Props extends BaseProps {
    describedBy?: string;
    style?: CSSProperties;
    invalid?: boolean;
}

function getWidthAsStyle(width?: string, maxLength?: number): CSSProperties | undefined {
    if (width) {
        return { width }; // prioritize width prop
    }

    if (maxLength) {
        // adapt to maxLength, but capped at 40ch
        const length = `${Math.min(maxLength, 40)}ch`;
        const padding = "24px"; // left + right padding
        return { width: `calc(${length} + ${padding})` };
    }

    return undefined;
}

export const BaseInputField = forwardRef<HTMLInputElement, Props>(
    ({ id, describedBy, invalid, maxLength, width, type = "text", className = "", ...rest }, ref) => (
        <input
            ref={ref}
            id={id}
            className={`jkl-text-input__input ${className}`}
            style={getWidthAsStyle(width, maxLength)}
            aria-describedby={describedBy}
            aria-invalid={invalid}
            maxLength={maxLength}
            type={type}
            {...rest}
        />
    ),
);
BaseInputField.displayName = "BaseInputField";
