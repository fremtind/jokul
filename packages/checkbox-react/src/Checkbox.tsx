import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
}

export function Checkbox({ children, defaultChecked, onChange }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.checked);
    return (
        <label className="jkl-checkbox">
            <input
                data-testid="jkl-checkbox-input"
                defaultChecked={defaultChecked}
                type="checkbox"
                onChange={handleChange}
            />
            <span className="jkl-checkbox__input" />
            {children}
        </label>
    );
}
