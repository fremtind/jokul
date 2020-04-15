/* eslint "jsx-a11y/no-onchange": 0 */

import React, { FocusEventHandler, ChangeEventHandler, useState } from "react";
import nanoid from "nanoid";
import { LabelVariant, ValuePair, getValuePair } from "@fremtind/jkl-core";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import classNames from "classnames";

interface Props {
    id?: string;
    label: string;
    items: Array<string | ValuePair>;
    className?: string;
    inline?: boolean;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    placeholder?: string;
    value?: string;
    forceCompact?: boolean;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    onFocus?: FocusEventHandler<HTMLSelectElement>;
    onBlur?: FocusEventHandler<HTMLSelectElement>;
}

export function NativeSelect({
    id,
    label,
    items,
    className = "",
    inline = false,
    helpLabel,
    errorLabel,
    variant,
    placeholder,
    value,
    forceCompact,
    onChange,
    onBlur,
    onFocus,
}: Props) {
    // If no value is given, set it to first item, or to empty string if there is a placeholder
    if (!value) {
        if (!placeholder && items.length) {
            value = getValuePair(items[0]).value;
        }
    }

    const componentClassName = classNames("jkl-select", className, {
        "jkl-select--inline": inline,
        "jkl-select--compact": forceCompact,
        "jkl-select--invalid": !!errorLabel,
    });

    const defaultValue = value ? undefined : "";

    const [uid] = useState(id || `jkl-select-${nanoid(8)}`);

    return (
        <div data-testid="jkl-select" className={componentClassName}>
            <Label standAlone htmlFor={uid} variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <select
                id={uid}
                value={value}
                defaultValue={defaultValue}
                className="jkl-select__value"
                onChange={onChange}
                onBlur={onBlur || onChange}
                onFocus={onFocus}
            >
                {placeholder && !value && (
                    <option disabled value="">
                        {placeholder}
                    </option>
                )}
                {items.map(getValuePair).map((item) => (
                    <option data-testid="jkl-select__option" key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
            <span className="jkl-select__chevron" />
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </div>
    );
}
