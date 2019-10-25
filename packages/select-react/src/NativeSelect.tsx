/* eslint "jsx-a11y/no-onchange": 0 */

import React from "react";
import { LabelVariant } from "@fremtind/jkl-core";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { SelectValuePair, getSelectValuePair } from "./SelectValuePair";

interface Props {
    label: string;
    items: Array<string | SelectValuePair>;
    inline?: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    placeholder?: string;
    value?: string;
    forceCompact?: boolean;
}

export function NativeSelect({
    label,
    items,
    className = "",
    onChange,
    inline = false,
    helpLabel,
    errorLabel,
    variant,
    placeholder,
    value,
    forceCompact,
    ...rest
}: Props) {
    // If no value is given, set it to first item, or to empty string if there is a placeholder
    if (!value) {
        if (!placeholder && items.length) {
            value = getSelectValuePair(items[0]).value;
        } else {
            value = "";
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(event);
    };
    const componentClassName = "jkl-select".concat(
        inline ? ` jkl-select--inline` : "",
        forceCompact ? ` jkl-select--compact` : "",
        !!errorLabel ? ` jkl-select--invalid` : "",
        value === "" ? ` jkl-select--no-value` : "",
        className ? ` ${className}` : "",
    );
    return (
        <label data-testid="jkl-select" className={componentClassName}>
            <Label variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <select value={value} className="jkl-select__value" onBlur={handleChange} onChange={handleChange} {...rest}>
                {placeholder && value === "" && (
                    <option disabled value="">
                        {placeholder}
                    </option>
                )}
                {items.map(getSelectValuePair).map((item) => (
                    <option data-testid="jkl-select__option" key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
            <span className="jkl-select__chevron" />
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </label>
    );
}
