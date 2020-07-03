import React, { ChangeEventHandler } from "react";
import classNames from "classnames";

interface Props {
    value: string;
    label: string;
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    inline?: boolean;
    checked?: boolean;
    invalid?: boolean;
    forceCompact?: boolean;
    inverted?: boolean;
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
    inverted,
}: Props) => (
    <label
        data-testid="jkl-radio-button__label-tag"
        className={classNames("jkl-radio-button", {
            "jkl-radio-button--compact": forceCompact,
            "jkl-radio-button--inline": inline,
            "jkl-radio-button--error": invalid,
            "jkl-radio-button--inverted": inverted,
        })}
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
        <span className="jkl-radio-button__label">{label}</span>
    </label>
);
