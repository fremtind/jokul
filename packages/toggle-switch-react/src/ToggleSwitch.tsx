import React, { ReactNode, MouseEventHandler } from "react";
import { SupportLabel } from "@fremtind/jkl-typography-react";

interface Props {
    children: ReactNode;
    pressed?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    inverted?: boolean;
    helpLabel?: string;
}

export const ToggleSwitch = ({ children, pressed, onClick, className, disabled, inverted, helpLabel }: Props) => {
    const componentClassName = "jkl-toggle-switch".concat(
        className ? ` ${className}` : "",
        inverted ? " jkl-toggle-switch--inverted" : "",
    );

    return (
        <>
            <button
                type="button"
                aria-pressed={!!pressed}
                disabled={disabled}
                className={componentClassName}
                onClick={onClick}
            >
                <span className="jkl-toggle-switch__slider">
                    <span className="jkl-toggle-switch__expanding-pill"></span>
                </span>
                {children}
            </button>
            {helpLabel && <SupportLabel className="jkl-toggle-switch__help-label" helpLabel={helpLabel} />}
        </>
    );
};
