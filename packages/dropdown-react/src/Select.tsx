/* eslint "jsx-a11y/no-onchange": 0 */

import React from "react";
import { LabelVariant } from "@fremtind/jkl-core";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { SelectValuePair, getSelectValuePairFrom } from "./SelectValuePair";

interface Props {
    label: string;
    items: Array<string | SelectValuePair>;
    inline?: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    autoComplete?: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    placeholder?: string;
    value?: string;
    forceCompact?: boolean;
}

export function Select({
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
            value = getSelectValuePairFrom(items[0]).value;
        } else {
            value = "";
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(event);
    };
    const componentClassName = "jkl-dropdown".concat(
        inline ? ` jkl-dropdown--inline` : "",
        forceCompact ? ` jkl-dropdown--compact` : "",
        !!errorLabel ? ` jkl-dropdown--invalid` : "",
        value === "" ? ` jkl-dropdown--no-value` : "",
        className ? ` ${className}` : "",
    );

    if (process.env.NODE_ENV !== "production") {
        console.warn(
            "WARNING: The Select component in @fremtind/jkl-dropdown-react has been deprecated. Please use the NativeSelect component from @fremtind/jkl-select-react instead.",
        );
    }

    return (
        <label data-testid="jkl-dropdown" className={componentClassName}>
            <Label variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <select
                value={value}
                className="jkl-dropdown__value"
                onBlur={handleChange}
                onChange={handleChange}
                {...rest}
            >
                {placeholder && value === "" && (
                    <option disabled value="">
                        {placeholder}
                    </option>
                )}
                {items.map(getSelectValuePairFrom).map((item) => (
                    <option data-testid="jkl-dropdown__option" key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
            <span className="jkl-dropdown__chevron" />
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </label>
    );
}
