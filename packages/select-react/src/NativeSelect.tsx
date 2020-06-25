/* eslint "jsx-a11y/no-onchange": 0 */

import React, { FocusEventHandler, ChangeEventHandler, useState, forwardRef } from "react";
import { nanoid } from "nanoid";
import { Label, LabelVariant, SupportLabel, ValuePair, getValuePair } from "@fremtind/jkl-core";
import classNames from "classnames";

import { ExpandArrow } from "./ExpandArrow";

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
    inverted?: boolean;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    onFocus?: FocusEventHandler<HTMLSelectElement>;
    onBlur?: FocusEventHandler<HTMLSelectElement>;
}

export const NativeSelect = forwardRef<HTMLSelectElement, Props>(
    (
        {
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
            inverted,
            onChange,
            onBlur,
            onFocus,
        },
        ref,
    ) => {
        // If no value is given, set it to first item, or to empty string if there is a placeholder
        if (!value) {
            if (!placeholder && items.length) {
                value = getValuePair(items[0]).value;
            }
        }

        const componentClassName = classNames("jkl-select", className, {
            "jkl-select--inline": inline,
            "jkl-select--compact": forceCompact,
            "jkl-select--inverted": inverted,
            "jkl-select--invalid": !!errorLabel,
        });

        const defaultValue = value ? undefined : "";

        const [uid] = useState(id || `jkl-select-${nanoid(8)}`);

        return (
            <div data-testid="jkl-select" className={componentClassName}>
                <Label standAlone htmlFor={uid} variant={variant} forceCompact={forceCompact}>
                    {label}
                </Label>
                <div className="jkl-select__outer-wrapper">
                    <select
                        ref={ref}
                        id={uid}
                        value={value}
                        defaultValue={defaultValue}
                        className="jkl-select__button"
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
                            <option
                                data-testid="jkl-select__option"
                                className="jkl-select__option"
                                key={item.value}
                                value={item.value}
                            >
                                {item.label}
                            </option>
                        ))}
                    </select>
                    <ExpandArrow className="jkl-select__arrow" />
                </div>
                <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
            </div>
        );
    },
);
