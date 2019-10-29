import { ChangeEventHandler, FocusEventHandler, CSSProperties } from "react";
import { TextField } from "./TextField";
import { TextArea } from "./TextArea";
import { ActionIcon } from "./ActionIcon";
import { ActionTextField } from "./ActionTextField";
import { InlineTextField } from "./InlineTextField";
import { LabelVariant } from "@fremtind/jkl-core";

export function getWidthAsStyle(width: string | undefined, maxLength: number | undefined): CSSProperties | undefined {
    if (width) {
        return { width }; // prioritize width prop
    }

    if (maxLength && maxLength < 15) {
        return { width: `${maxLength + 3}ch` }; // else use maxLength if not large
    }

    return undefined;
}

export interface Props {
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
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
    readOnly?: boolean;
    maxLength?: number;
    width?: string;
}

export { TextField, TextArea, ActionIcon, ActionTextField, InlineTextField };
