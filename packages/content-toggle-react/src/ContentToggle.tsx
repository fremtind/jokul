import React, { ReactNode, FC } from "react";
import cn from "classnames";

export const ContentToggle: FC<{
    showSecondary: boolean;
    secondary: ReactNode;
    className?: string;
}> = ({ showSecondary, secondary, children, className = "" }) => (
    <>
        <span className={`jkl-content-toggle ${className}`}>
            <span
                className={cn("jkl-content-toggle__slider", {
                    "jkl-content-toggle--show-first": !showSecondary,
                    "jkl-content-toggle--show-second": showSecondary,
                })}
            >
                <span aria-hidden={showSecondary}>{children}</span>
                <span aria-hidden={!showSecondary}>{secondary}</span>
            </span>
        </span>
    </>
);
