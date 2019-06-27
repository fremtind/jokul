import React, { ChangeEvent } from "react";

interface Props {
    label: string;
    value: string;
    onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void;
    isInvalid?: boolean;
    id?: string;
    required?: boolean;
}

export const TextArea = ({ isInvalid = false, id, label, ...rest }: Props) => {
    return (
        <label className="jkl-text-field jkl-text-area">
            <textarea aria-invalid={isInvalid} className="jkl-text-field__input" id={id} placeholder=" " {...rest} />
            <span className="jkl-text-field__label">{label}</span>
            <span className="jkl-text-field__border"></span>
        </label>
    );
};
