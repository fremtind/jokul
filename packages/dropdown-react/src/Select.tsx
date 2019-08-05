import React from "react";
import { SupportText } from "@fremtind/jkl-typography-react";

interface Props {
    label: string;
    items: string[];
    inline?: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    autoComplete?: string;
    helpText?: string;
    errorText?: string;
    isInvalid?: boolean;
}

export function Select({
    label,
    items,
    className = "",
    onChange,
    inline = false,
    helpText,
    errorText,
    isInvalid = false,
    ...rest
}: Props) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => onChange && onChange(event);
    return (
        <label
            className={`jkl-dropdown ${inline ? "jkl-dropdown--inline" : ""} ${
                isInvalid ? "jkl-dropdown--invalid" : ""
            } ${className}`}
        >
            <select className="jkl-dropdown__value" onBlur={handleChange} onChange={handleChange} {...rest}>
                {items.map((item) => (
                    <option data-testid="jkl-dropdown__option" key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            <span className="jkl-dropdown__label jkl-dropdown__label--has-value">{label}</span>
            <SupportText helpText={helpText} errorText={errorText} isInvalid={isInvalid} />
        </label>
    );
}
