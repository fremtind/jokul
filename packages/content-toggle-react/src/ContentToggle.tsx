import React, { ReactNode, FC, useState, useEffect, useRef } from "react";
import cn from "classnames";

export const ContentToggle: FC<{
    showSecondary: boolean;
    secondary: ReactNode;
    className?: string;
    variant?: "flip" | "fade";
}> = ({ showSecondary, secondary, children, className = "", variant = "flip" }) => {
    // this mechanism is to be able to prevent animating keyframes on the initial render.
    // looking for actual change and then enable animating prevents initial blinking and premature animations
    const [initialShowSecondary] = useState(showSecondary);
    const [initial, setInitial] = useState(true);
    const sliderRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (showSecondary !== initialShowSecondary) {
            setInitial(false);
        }
    }, [showSecondary, initialShowSecondary]);

    useEffect(() => {
        if (sliderRef.current) {
            const sliderChildren = sliderRef.current.children;

            let width = 0;

            for (let i = 0; i < sliderChildren.length; i++) {
                const child = sliderChildren[i];
                if (child.clientWidth > width) {
                    width = child.clientWidth;
                }
            }

            sliderRef.current.style.width = `${width}px`;
        }
    }, [sliderRef]);

    return (
        <>
            <span className={`jkl-content-toggle jkl-content-toggle--${variant} ${className}`}>
                <span
                    className={cn("jkl-content-toggle__slider", {
                        "jkl-content-toggle__slider--initial": initial,
                        "jkl-content-toggle__slider--animate": !initial,
                        "jkl-content-toggle--show-first": !showSecondary,
                        "jkl-content-toggle--show-second": showSecondary,
                    })}
                    ref={sliderRef}
                >
                    <span className="jkl-content-toggle__first" aria-hidden={showSecondary}>
                        {children}
                    </span>
                    <span className="jkl-content-toggle__secondary" aria-hidden={!showSecondary}>
                        {secondary}
                    </span>
                </span>
            </span>
        </>
    );
};
