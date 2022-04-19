import React, { ReactNode, FC, useState, useEffect } from "react";
import cn from "classnames";

export const ContentToggle: FC<{
    /** @default "polite" */
    "aria-live"?: "polite" | "assertive" | "off";
    className?: string;
    children?: ReactNode;
    showSecondary: boolean;
    secondary: ReactNode;
    /** @default "flip" */
    variant?: "flip" | "fade";
}> = ({ "aria-live": ariaLive = "polite", showSecondary, secondary, children, className, variant = "flip" }) => {
    // this mechanism is to be able to prevent animating keyframes on the initial render.
    // looking for actual change and then enable animating prevents initial blinking and premature animations
    const [initialShowSecondary] = useState(showSecondary);
    const [initial, setInitial] = useState(true);
    useEffect(() => {
        if (showSecondary !== initialShowSecondary) {
            setInitial(false);
        }
    }, [showSecondary, initialShowSecondary]);

    return (
        <span className={cn("jkl-content-toggle", `jkl-content-toggle--${variant}`, className)}>
            <span
                className="jkl-content-toggle__slider"
                aria-live={ariaLive}
                data-show={showSecondary ? "second" : "first"}
                data-initial={initial}
            >
                <span className="jkl-content-toggle__first" aria-hidden={showSecondary}>
                    {children}
                </span>
                <span className="jkl-content-toggle__second" aria-hidden={!showSecondary}>
                    {secondary}
                </span>
            </span>
        </span>
    );
};
