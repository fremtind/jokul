import React from "react";

interface Props {
    value: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inline?: boolean;
    checked?: boolean;
}

export const RadioButton = ({ value, onChange, name = "", inline = false, checked }: Props) => (
    <label
        data-testid="jkl-radio-button__label-tag"
        className={"jkl-radio-button".concat(inline ? " jkl-radio-button--inline" : "")}
    >
        <input
            className="jkl-radio-button__input"
            type="radio"
            name={name}
            value={value}
            onChange={onChange}
            checked={checked}
        />
        <span className="jkl-radio-button__dot" />
        <span className="jkl-radio-button__label">{value}</span>
    </label>
);
