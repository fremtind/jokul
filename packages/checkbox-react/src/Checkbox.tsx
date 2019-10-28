import React, { ReactNode, ChangeEvent } from "react";

interface Props {
    children: ReactNode;
    name: string;
    value: string;
    checked?: boolean;
    inline?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    forceCompact?: boolean;
}

export function Checkbox({ children, name, value, checked, onChange, className, inline = false, forceCompact }: Props) {
    const classNames = "jkl-checkbox"
        .concat(forceCompact ? " jkl-checkbox--compact" : "")
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
                value={value}
                onChange={onChange}
            />
            <span className="jkl-checkbox__check-mark" />
            {children}
        </label>
    );
}
