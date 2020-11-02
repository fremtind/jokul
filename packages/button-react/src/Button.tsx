import React, { forwardRef, HTMLAttributes, TouchEvent } from "react";
import classNames from "classnames";

export interface Props extends Exclude<HTMLAttributes<HTMLButtonElement>, "disabled"> {
    forceCompact?: boolean;
    inverted?: boolean;
}

type ValidButtons = "primary" | "secondary" | "tertiary";

const makeButtonComponent = (buttonType: ValidButtons) => {
    const button = forwardRef<HTMLButtonElement, Props>(
        ({ children, className, forceCompact, inverted, onClick, onTouchStart, ...rest }, ref) => {
            const componentClassName = classNames(
                "jkl-button",
                "jkl-button--" + buttonType,
                {
                    "jkl-button--compact": forceCompact,
                    "jkl-button--inverted": inverted,
                },
                className,
            );

            const handleTouch = (event: TouchEvent<HTMLButtonElement>) => {
                onTouchStart && onTouchStart(event);

                const target = event.target as HTMLButtonElement;
                if (target && event.targetTouches.length) {
                    const Xcoord = event.targetTouches[0].clientX - target.getBoundingClientRect().x;
                    const Ycoord = event.targetTouches[0].clientY - target.getBoundingClientRect().y;
                    target.style.setProperty("--jkl-touch-xcoord", Xcoord.toPrecision(4) + "px");
                    target.style.setProperty("--jkl-touch-ycoord", Ycoord.toPrecision(4) + "px");
                    target.classList.add("jkl-button--pressed");
                    setTimeout(() => target.classList.remove("jkl-button--pressed"), 400);
                }
            };

            return (
                <button className={componentClassName} onClick={onClick} onTouchStart={handleTouch} {...rest} ref={ref}>
                    {children}
                </button>
            );
        },
    );
    return button;
};

export const PrimaryButton = makeButtonComponent("primary");
export const SecondaryButton = makeButtonComponent("secondary");
export const TertiaryButton = makeButtonComponent("tertiary");
