import { SupportLabel, WithChildren } from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { MouseEventHandler, FC } from "react";

interface ToggleSwitchProps extends WithChildren {
    id?: string;
    pressed?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    helpLabel?: string;
}

export const ToggleSwitch: FC<ToggleSwitchProps> = ({
    id,
    children,
    pressed,
    onClick,
    className,
    disabled,
    helpLabel,
}) => {
    const uid = useId(id || "jkl-toggle-switch", { generateSuffix: !id });
    const supportId = `${uid}_support-label`;
    const describedBy = helpLabel ? supportId : undefined;
    return (
        <div id={uid} className="jkl-toggle-switch__container">
            <button
                type="button"
                aria-pressed={!!pressed}
                aria-describedby={describedBy}
                disabled={disabled}
                className={cn("jkl-toggle-switch", className)}
                onClick={onClick}
            >
                <span className="jkl-toggle-switch__slider">
                    <span className="jkl-toggle-switch__expanding-pill"></span>
                </span>
                {children}
            </button>
            {helpLabel && (
                <SupportLabel id={supportId} className="jkl-toggle-switch__help-label" helpLabel={helpLabel} />
            )}
        </div>
    );
};
