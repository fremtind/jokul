import React, { ReactNode, ChangeEvent } from "react";
import { SupportLabel } from "@fremtind/jkl-typography-react";

interface Props {
    children: ReactNode;
    checked?: boolean;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    inverted?: boolean;
    helpLabel?: string;
}

export const ToggleSwitch = ({ children, checked, onChange, className, disabled, inverted, helpLabel }: Props) => {
    const componentClassName = "jkl-toggle-switch".concat(
        className ? ` ${className}` : "",
        inverted ? " jkl-toggle-switch--inverted" : "",
    );
    return (
        <>
            <label data-testid="jkl-toggle-input--label" className={componentClassName}>
                <input
                    className="jkl-toggle-switch__input"
                    data-testid="jkl-toggle-input"
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                />
                <span className="jkl-toggle-switch__slider">
                    <span className="jkl-toggle-switch__expanding-pill"></span>
                </span>
                <span className="jkl-p jkl-toggle-switch__label">{children}</span>
            </label>
            <SupportLabel className="jkl-toggle-switch__helplabel" helpLabel={helpLabel} />
        </>
    );
};
