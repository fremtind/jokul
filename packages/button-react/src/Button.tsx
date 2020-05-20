import React, { HTMLAttributes } from "react";
import classNames from "classnames";

export interface Props extends Exclude<HTMLAttributes<HTMLButtonElement>, "disabled"> {
    forceCompact?: boolean;
    inverted?: boolean;
}

type ValidButtons = "primary" | "secondary" | "tertiary";

function makeButtonComponent(buttonType: ValidButtons) {
    return function button({ children, className, forceCompact, inverted, ...rest }: Props) {
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
            <button className={componentClassName} {...rest}>
                {children}
            </button>
        );
    };
}

export const PrimaryButton = makeButtonComponent("primary");
export const SecondaryButton = makeButtonComponent("secondary");
export const TertiaryButton = makeButtonComponent("tertiary");
