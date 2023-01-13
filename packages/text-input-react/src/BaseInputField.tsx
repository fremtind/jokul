import cn from "classnames";
import React, {
    ChangeEventHandler,
    CSSProperties,
    FocusEventHandler,
    forwardRef,
    KeyboardEventHandler,
    MouseEventHandler,
} from "react";
import { getWidthAsStyle } from "./utils";

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

export const BaseInputField = forwardRef<HTMLInputElement, Props>(
    ({ id, describedBy, invalid, maxLength, width, type = "text", align = "left", className = "", ...rest }, ref) => (
        <input
            ref={ref}
            id={id}
            className={cn("jkl-text-input__input", className, {
                "jkl-text-input__input--align-right": align === "right",
            })}
            style={getWidthAsStyle(width)}
            aria-describedby={describedBy}
            aria-invalid={invalid}
            maxLength={maxLength}
            type={type}
            {...rest}
        />
    ),
);
BaseInputField.displayName = "BaseInputField";
