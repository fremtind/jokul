import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    checked?: boolean;
    className?: string;
    onChange?: (checked: boolean) => void;
}

export const ToggleSwitch = ({ children, checked, onChange, className = "" }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.checked);
    return (
        <label data-testid="jkl-toggle-input--label" className={`jkl-toggle-switch ${className}`}>
            <input
                className="jkl-toggle-switch__input"
                data-testid="jkl-toggle-input"
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
            <span className="jkl-toggle-switch__slider">
                <span className="jkl-toggle-switch__expanding-pill"></span>
            </span>
            <span className="jkl-p jkl-toggle-switch__label">{children}</span>
        </label>
    );
};
