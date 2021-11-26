import React, { ReactNode, useState, forwardRef, ChangeEventHandler, FocusEventHandler } from "react";
import classNames from "classnames";
import { nanoid } from "nanoid";
import { DataTestAutoId } from "@fremtind/jkl-core";

interface Props extends DataTestAutoId {
    children: ReactNode;
    name: string;
    value: string;
    checked?: boolean;
    inline?: boolean;
    className?: string;
    forceCompact?: boolean;
    invalid?: boolean;
    /** @deprecated */
    inverted?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(
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
            "data-testautoid": testAutoId,
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
                    data-testautoid={testAutoId}
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
Checkbox.displayName = "Checkbox";
