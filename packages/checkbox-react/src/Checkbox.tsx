import React, { ReactNode, useState } from "react";
import classNames from "classnames";
import { nanoid } from "nanoid";

interface Props {
    children: ReactNode;
    name: string;
    value: string;
    checked?: boolean;
    inline?: boolean;
    className?: string;
    forceCompact?: boolean;
    invalid?: boolean;
    inverted?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export const Checkbox = React.forwardRef<HTMLInputElement, Props>(
    (
        {
            children,
            name,
            value,
            checked,
            invalid,
            className,
            inline = false,
            forceCompact,
            inverted,
            ...eventHandlers
        },
        ref,
    ) => {
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
                    id={id}
                    ref={ref}
                    className="jkl-checkbox__input"
                    data-testid="jkl-checkbox-input"
                    aria-invalid={invalid}
                    checked={checked}
                    type="checkbox"
                    name={name}
                    value={value}
                    {...eventHandlers}
                />
                <label htmlFor={id} className="jkl-checkbox__label">
                    <span className="jkl-checkbox__check-mark" />
                    <span className="jkl-checkbox__check-text">{children}</span>
                </label>
            </div>
        );
    },
);
