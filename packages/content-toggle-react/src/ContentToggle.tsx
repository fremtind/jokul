import { WithChildren } from "@fremtind/jkl-core";
import { useAriaLiveRegion } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { ReactNode, FC, useState, useEffect } from "react";

export interface ContentToggleProps extends WithChildren {
    /** @default "polite" */
    "aria-live"?: "polite" | "assertive" | "off";
    className?: string;
    showSecondary: boolean;
    secondary: ReactNode;
    /** @default "flip" */
    variant?: "flip" | "fade";
}

export const ContentToggle: FC<ContentToggleProps> = ({
    "aria-live": ariaLiveProp = "polite",
    showSecondary,
    secondary,
    children,
    className,
    variant = "flip",
    ...rest
}) => {
    // this mechanism is to be able to prevent animating keyframes on the initial render.
    // looking for actual change and then enable animating prevents initial blinking and premature animations
    const [initialShowSecondary] = useState(showSecondary);
    const [initial, setInitial] = useState(true);
    useEffect(() => {
        if (showSecondary !== initialShowSecondary) {
            setInitial(false);
        }
    }, [showSecondary, initialShowSecondary]);

    const ariaLive = useAriaLiveRegion(showSecondary, { politeness: ariaLiveProp });

    return (
        <span {...rest} className={cn("jkl-content-toggle", `jkl-content-toggle--${variant}`, className)}>
            <span
                {...ariaLive}
                className="jkl-content-toggle__slider"
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
