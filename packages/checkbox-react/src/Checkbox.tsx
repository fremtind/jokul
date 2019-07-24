import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export function Checkbox({ children, checked, onChange }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.checked);
    return (
        <label className="jkl-checkbox">
            <input data-testid="jkl-checkbox-input" checked={checked} type="checkbox" onChange={handleChange} />
            <span className="jkl-checkbox__input" />
            {children}
        </label>
    );
}
