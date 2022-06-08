import cn from "classnames";
import React, {
    ChangeEventHandler,
    CSSProperties,
    FocusEventHandler,
    forwardRef,
    KeyboardEventHandler,
    MouseEventHandler,
} from "react";

export interface BaseProps {
    id?: string;
    className?: string;
    maxLength?: number;
    width?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onClick?: MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyUp?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyPress?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    placeholder?: string;
    readOnly?: boolean;
    autoComplete?: string;
    required?: boolean;
    type?: "text" | "number" | "tel" | "password" | "email" | "year" | "search";
    name?: string;
    defaultValue?: string;
    /**
     * Merk som ugyldig uten å sende inn en errorLabel.
     * NB! Brukes kun i tilfeller der valideringsfeil dukker opp andre steder, for eksempel i en FieldGroup.
     */
    invalid?: boolean;
    /**
     * Brukes til inputfelter hvor det brukes maskering, for formatering av store tall. Brukes typisk bare til valuta.
     * @default "left"
     */
    align?: "left" | "right";
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
    ({ id, describedBy, invalid, maxLength, width, type = "text", align = "left", className = "", ...rest }, ref) => (
        <input
            ref={ref}
            id={id}
            className={cn("jkl-text-input__input", className, {
                "jkl-text-input__input--align-right": align === "right",
            })}
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
