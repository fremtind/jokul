import React, { forwardRef, HTMLAttributes } from "react";
import classNames from "classnames";

export interface Props extends Exclude<HTMLAttributes<HTMLButtonElement>, "disabled"> {
    forceCompact?: boolean;
    inverted?: boolean;
}

type ValidButtons = "primary" | "secondary" | "tertiary";

const makeButtonComponent = (buttonType: ValidButtons) => {
    const button = forwardRef<HTMLButtonElement, Props>(
        ({ children, className, forceCompact, inverted, ...rest }, ref) => {
            const componentClassName = classNames(
                "jkl-button",
                "jkl-button--" + buttonType,
                {
                    "jkl-button--compact": forceCompact,
                    "jkl-button--inverted": inverted,
                },
                className,
            );

            return (
                <button className={componentClassName} {...rest} ref={ref}>
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
