import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    defaultChecked?: boolean;
    className?: string;
}

export const ToggleSwitch = ({ children, defaultChecked, className = "" }: Props) => {
    return (
        <label data-testid="jkl-toggle-input--label" className={`jkl-toggle-switch ${className}`}>
            <input data-testid="jkl-toggle-input" type="checkbox" defaultChecked={defaultChecked} />
            <span className="jkl-toggle-switch__slider" />
            <span className="jkl-toggle-switch__label jkl-p">{children}</span>
        </label>
    );
};
