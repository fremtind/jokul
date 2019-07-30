import React from "react";

interface Props {
    label: string;
    items: string[];
    inline?: boolean;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    autoComplete?: string;
}

export function Select({ label, items, className, onChange, inline = false, ...rest }: Props) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => onChange && onChange(event);
    return (
        <label className={`jkl-dropdown ${inline ? "jkl-dropdown--inline" : ""} ${className}`}>
            <select className="jkl-dropdown__value" onBlur={handleChange} onChange={handleChange} {...rest}>
                {items.map((item) => (
                    <option data-testid="jkl-dropdown__option" key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            <span className="jkl-dropdown__label jkl-dropdown__label--has-value">{label}</span>
        </label>
    );
}
