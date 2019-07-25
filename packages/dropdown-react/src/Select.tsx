import React from "react";

interface Props {
    label: string;
    items: string[];
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    autocomplete?: string;
}

export function Select({ label, items, className, onChange, ...rest }: Props) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => onChange && onChange(event);
    return (
        <label className={`jkl-dropdown ${className}`}>
            <select className="jkl-dropdown__value" onBlur={handleChange} onChange={handleChange} {...rest}>
                {items.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            <span className="jkl-dropdown__label jkl-dropdown__label--has-value">{label}</span>
        </label>
    );
}
