import React, { ChangeEvent, useState } from "react";
import uuid from "uuid/v4";

interface Props {
    label: string;
    className?: string;
    value: string;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    disabled?: boolean;
    form?: string;
    autoFocus?: boolean;
    required?: boolean;
    tabIndex?: number;
}

export const ToggleSwitch = ({ id, label, className = "", ...rest }: Props) => {
    const [generatedId] = useState(uuid());

    return (
        <label className={`jkl-toggle-switch ${className}`} htmlFor={id || generatedId}>
            <input type="checkbox" className="jkl-text-field__input" id={id || generatedId} placeholder=" " {...rest} />
            <span className="jkl-text-field__label">{label}</span>
            <span className="jkl-text-field__border"></span>
        </label>
    );
};
