import React, { FocusEventHandler, ChangeEventHandler, CSSProperties } from "react";
import { LabelVariant } from "@fremtind/jkl-core";

export interface BaseInputProps {
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value?: string;
    className?: string;
    id?: string;
    required?: boolean;
    placeholder?: string;
    variant?: LabelVariant;
    forceCompact?: boolean;
    readOnly?: boolean;
    maxLength?: number;
    width?: string;
    autoComplete?: string;
}

interface Props extends BaseInputProps {
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
    invalid?: boolean;
    ariaDescribedby?: string;
}

function getWidthAsStyle(width?: string, maxLength?: number): CSSProperties | undefined {
    if (width) {
        return { width }; // prioritize width prop
    }

    if (maxLength && maxLength < 15) {
        return { width: `${maxLength + 3}ch` }; // else use maxLength if not large
    }

    return undefined;
}

export const BaseInputField = ({ maxLength, width, invalid, ariaDescribedby, ...rest }: Props) => {
    const style = getWidthAsStyle(width, maxLength);

    return (
        <input
            className="jkl-text-field__input"
            maxLength={maxLength}
            style={style}
            aria-describedby={ariaDescribedby}
            aria-invalid={invalid}
            {...rest}
        />
    );
};
