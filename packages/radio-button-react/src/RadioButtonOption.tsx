import React, { ChangeEventHandler, useState, InputHTMLAttributes } from "react";
import classNames from "classnames";
import { nanoid } from "nanoid";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
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
    ...radioProps
}: Props) => {
    const [inputId] = useState(`jkl-radio-button-${nanoid(8)}`);
    const componentClassName = classNames("jkl-radio-button", {
        "jkl-radio-button--compact": forceCompact,
        "jkl-radio-button--inline": inline,
        "jkl-radio-button--error": invalid,
        "jkl-radio-button--inverted": inverted,
    });

    return (
        <div className={componentClassName}>
            <input
                id={inputId}
                className="jkl-radio-button__input"
                type="radio"
                name={name}
                value={value}
                onChange={onChange}
                checked={checked}
                {...radioProps}
            />
            <label data-testid="jkl-radio-button__label-tag" htmlFor={inputId} className="jkl-radio-button__label">
                <span aria-hidden className="jkl-radio-button__dot" />
                <span className="jkl-radio-button__text">{label}</span>
            </label>
        </div>
    );
};
