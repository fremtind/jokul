import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    checked?: boolean;
    className?: string;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    inverted?: boolean;
}

export const ToggleSwitch = ({ children, checked, onChange, className = "", disabled, inverted }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e.target.checked);
    const componentClassName = "jkl-toggle-switch".concat(
        className ? ` ${className}` : "",
        inverted ? " jkl-toggle-switch--inverted" : "",
    );
    return (
        <label data-testid="jkl-toggle-input--label" className={componentClassName}>
            <input
                className="jkl-toggle-switch__input"
                data-testid="jkl-toggle-input"
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
            />
            <span className="jkl-toggle-switch__slider">
                <span className="jkl-toggle-switch__expanding-pill"></span>
            </span>
            <span className="jkl-p jkl-toggle-switch__label">{children}</span>
        </label>
    );
};
