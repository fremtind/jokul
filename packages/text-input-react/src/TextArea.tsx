import React, { ChangeEvent } from "react";
import { SupportLabel } from "@fremtind/jkl-typography-react";

interface Props {
    label: string;
    value?: string;
    onChange?: (value: ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (value: ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    id?: string;
    required?: boolean;
    helpLabel?: string;
    errorLabel?: string;
}

export const TextArea = ({ id, label, className = "", helpLabel, errorLabel, ...rest }: Props) => (
    <label data-testid="jkl-text-field" className={`jkl-text-field jkl-text-area ${className}`}>
        <textarea aria-invalid={!!errorLabel} className="jkl-text-field__input" id={id} placeholder=" " {...rest} />
        <span className="jkl-text-field__label">{label}</span>
        <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} />
    </label>
);
