import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    defaultChecked?: boolean;
    className?: string;
    onChange?: (checked: boolean) => void;
}

export const ToggleSwitch = ({ children, defaultChecked, onChange, className = "" }: Props) => {
    return (
        <label data-testid="jkl-toggle-input--label" className={`jkl-toggle-switch ${className}`}>
            <input
                data-testid="jkl-toggle-input"
                type="checkbox"
                defaultChecked={defaultChecked}
                onChange={(e) => onChange && onChange(e.target.checked)}
            />
            <span className="jkl-toggle-switch__slider" />
            <span className="jkl-toggle-switch__label jkl-p">{children}</span>
        </label>
    );
};
