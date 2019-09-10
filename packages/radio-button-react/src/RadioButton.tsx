import React from "react";

interface Props {
    value: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inline?: boolean;
    checked?: boolean;
    invalid?: boolean;
}

export const RadioButton = ({ value, onChange, name = "", inline = false, checked, invalid = false }: Props) => (
    <label
        data-testid="jkl-radio-button__label-tag"
        className={"jkl-radio-button"
            .concat(inline ? " jkl-radio-button--inline" : "")
            .concat(invalid ? " jkl-radio-button--error" : "")}
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
        <span className="jkl-radio-button__label">{value}</span>
    </label>
);
