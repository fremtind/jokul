import React, { useState, ChangeEvent } from "react";
import nanoid from "nanoid";

interface Props {
    value: string;
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    inline?: boolean;
    checked?: boolean;
}

export const RadioButton = ({ value, onChange, name = "", inline = false, checked }: Props) => {
    const [id] = useState(nanoid(16));
    return (
        <span className={"jkl-radio-button".concat(inline ? " jkl-radio-button--inline" : "")}>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                className="jkl-radio-button__input"
                onChange={onChange}
                checked={checked}
            />
            <label htmlFor={id} className="jkl-radio-button__label">
                {value}
            </label>
        </span>
    );
};
