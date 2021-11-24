import React, { FocusEventHandler, ChangeEventHandler, useState, forwardRef } from "react";
import { nanoid } from "nanoid";
import { Label, LabelVariant, SupportLabel, ValuePair, getValuePair } from "@fremtind/jkl-core";
import cx from "classnames";
import { ExpandArrow } from "./ExpandArrow";

export interface NativeSelectProps {
    id?: string;
    name?: string;
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
    /** @deprecated */
    inverted?: boolean;
    width?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    onFocus?: FocusEventHandler<HTMLSelectElement>;
    onBlur?: FocusEventHandler<HTMLSelectElement>;
}

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
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
            width,
            ...rest
        },
        ref,
    ) => {
        const [uid] = useState(id || `jkl-select-${nanoid(8)}`);

        return (
            <div
                data-testid="jkl-select"
                className={cx("jkl-select", className, {
                    "jkl-select--inline": inline,
                    "jkl-select--compact": forceCompact,
                    "jkl-select--inverted": inverted,
                    "jkl-select--invalid": !!errorLabel,
                })}
            >
                <Label standAlone htmlFor={uid} variant={variant} forceCompact={forceCompact}>
                    {label}
                </Label>
                <div className="jkl-select__outer-wrapper" style={{ width }}>
                    <select
                        ref={ref}
                        id={uid}
                        className="jkl-select__button"
                        defaultValue={value ? undefined : ""}
                        value={value}
                        {...rest}
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

NativeSelect.displayName = "NativeSelect";
