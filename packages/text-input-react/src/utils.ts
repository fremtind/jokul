import { ChangeEventHandler, FocusEventHandler, CSSProperties } from "react";
import { LabelVariant } from "@fremtind/jkl-core";

export function getWidthAsStyle(width?: string, maxLength?: number): CSSProperties | undefined {
    if (width) {
        return { width }; // prioritize width prop
    }

    if (maxLength && maxLength < 15) {
        return { width: `${maxLength + 3}ch` }; // else use maxLength if not large
    }

    return undefined;
}

export interface TextInputProps {
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    label: string;
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
