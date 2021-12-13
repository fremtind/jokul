import React, { ReactNode, MouseEventHandler, FC } from "react";
import { SupportLabel } from "@fremtind/jkl-core";
import classNames from "classnames";

interface Props {
    children: ReactNode;
    pressed?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    /** @deprecated */
    inverted?: boolean;
    helpLabel?: string;
}

export const ToggleSwitch: FC<Props> = ({ children, pressed, onClick, className, disabled, inverted, helpLabel }) => {
    const componentClassName = classNames("jkl-toggle-switch", className, {
        "jkl-toggle-switch--inverted": inverted,
    });

    return (
        <div className="jkl-toggle-switch__container">
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
        </div>
    );
};
