import { SupportLabel, WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { MouseEventHandler, FC } from "react";

interface ToggleSwitchProps extends WithChildren {
    pressed?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    helpLabel?: string;
}

export const ToggleSwitch: FC<ToggleSwitchProps> = ({ children, pressed, onClick, className, disabled, helpLabel }) => {
    return (
        <div className="jkl-toggle-switch__container">
            <button
                type="button"
                aria-pressed={!!pressed}
                disabled={disabled}
                className={cn("jkl-toggle-switch", className)}
                onClick={onClick}
            >
                <span className="jkl-toggle-switch__slider">
                    <span className="jkl-toggle-switch__expanding-pill"></span>
                </span>
                {children}
            </button>
            {helpLabel && <SupportLabel className="jkl-toggle-switch__help-label" helpLabel={helpLabel} />}
        </div>
    );
};
