import React, { ReactNode, ChangeEvent } from "react";

interface Props {
    children: ReactNode;
    name: string;
    value: string;
    checked?: boolean;
    inline?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export function Checkbox({ children, name, value, checked, onChange, className, inline = true }: Props) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange && onChange(e);
    const classNames = "jkl-checkbox".concat(inline ? " jkl-checkbox--inline" : "", className ? ` ${className}` : "");
    return (
        <label className={classNames}>
            <input
                className="jkl-checkbox__input"
                data-testid="jkl-checkbox-input"
                checked={checked}
                type="checkbox"
                name={name}
                value={value}
                onChange={handleChange}
            />
            <span className="jkl-checkbox__check-mark" />
            {children}
        </label>
    );
}
