import React, { ChangeEvent } from "react";

interface Props {
    label: string;
    value?: string;
    onChange?: (value: ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    isInvalid?: boolean;
    id?: string;
    required?: boolean;
    helpText?: string;
    errorText?: string;
}

export const TextArea = ({ isInvalid = false, id, label, className = "", helpText, errorText, ...rest }: Props) => (
    <label data-testid="jkl-text-field" className={`jkl-text-field jkl-text-area ${className}`}>
        <textarea aria-invalid={isInvalid} className="jkl-text-field__input" id={id} placeholder=" " {...rest} />
        <span className="jkl-text-field__label">{label}</span>
        {helpText && <span className="jkl__text jkl__text--help">{helpText}</span>}
        {errorText && <span className="jkl__text jkl__text--error">{errorText}</span>}
    </label>
);
