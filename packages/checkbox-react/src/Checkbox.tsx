import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
}

export function Checkbox({ children, checked, onChange, className = "" }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.checked);
    return (
        <label className={`jkl-checkbox ${className}`}>
            <input data-testid="jkl-checkbox-input" checked={checked} type="checkbox" onChange={handleChange} />
            <span className="jkl-checkbox__input" />
            {children}
        </label>
    );
}
