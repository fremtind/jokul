import React, { ReactNode, ChangeEvent } from "react";

interface Props {
    children: ReactNode;
    name: string;
    checked?: boolean;
    inline?: boolean;
    onChange?: (name: string, checked: boolean) => void;
    className?: string;
}

export function Checkbox({ children, name, checked, onChange, className, inline = false }: Props) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange && onChange(name, e.target.checked);
    const classNames = "jkl-checkbox"
        .concat(inline ? " jkl-checkbox--inline" : "")
        .concat(className ? ` ${className}` : "");
    return (
        <label className={classNames}>
            <input
                className="jkl-checkbox__input"
                data-testid="jkl-checkbox-input"
                checked={checked}
                type="checkbox"
                name={name}
                onChange={handleChange}
            />
            <span className="jkl-checkbox__check-mark" />
            {children}
        </label>
    );
}
