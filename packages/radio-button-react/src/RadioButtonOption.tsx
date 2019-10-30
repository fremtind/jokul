import React, { ChangeEventHandler } from "react";

interface Props {
    value: string;
    label: string;
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    inline?: boolean;
    checked?: boolean;
    invalid?: boolean;
    forceCompact?: boolean;
}

export const RadioButtonOption = ({
    value,
    label,
    onChange,
    name = "",
    inline = false,
    checked,
    invalid = false,
    forceCompact,
}: Props) => (
    <label
        data-testid="jkl-radio-button__label-tag"
        className={"jkl-radio-button".concat(
            forceCompact ? " jkl-radio-button--compact" : "",
            inline ? " jkl-radio-button--inline" : "",
            invalid ? " jkl-radio-button--error" : "",
        )}
    >
        <input
            className="jkl-radio-button__input"
            type="radio"
            name={name}
            value={value}
            onChange={onChange}
            checked={checked}
            aria-invalid={invalid}
        />
        <span className="jkl-radio-button__dot" />
        <span className="jkl-radio-button__label">{label}</span>
    </label>
);
