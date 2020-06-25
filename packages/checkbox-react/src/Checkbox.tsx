import React, { ReactNode, ChangeEvent, useState } from "react";
import classNames from "classnames";
import { nanoid } from "nanoid";

interface Props {
    children: ReactNode;
    name: string;
    value: string;
    checked?: boolean;
    inline?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    forceCompact?: boolean;
    invalid?: boolean;
    inverted?: boolean;
}

export function Checkbox({
    children,
    name,
    value,
    checked,
    invalid,
    onChange,
    className,
    inline = false,
    forceCompact,
    inverted,
}: Props) {
    const componentClassNames = classNames("jkl-checkbox", className, {
        "jkl-checkbox--compact": forceCompact,
        "jkl-checkbox--inline": inline,
        "jkl-checkbox--error": invalid,
        "jkl-checkbox--inverted": inverted,
    });
    const [id] = useState(`jkl-checkbox-${nanoid(8)}`);

    return (
        <div className={componentClassNames}>
            <input
                className="jkl-checkbox__input"
                data-testid="jkl-checkbox-input"
                aria-invalid={invalid}
                checked={checked}
                type="checkbox"
                name={name}
                value={value}
                onChange={onChange}
                id={id}
            />
            <label htmlFor={id} className="jkl-checkbox__label">
                <span className="jkl-checkbox__check-mark" />
                {children}
            </label>
        </div>
    );
}
