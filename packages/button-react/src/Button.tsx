import React, { MouseEventHandler, ReactNode } from "react";
import classNames from "classnames";

interface Props {
    children: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    forceCompact?: boolean;
    inverted?: boolean;
    type?: "button" | "reset" | "submit";
}

type ValidButtons = "primary" | "secondary" | "tertiary";

function makeButtonComponent(buttonType: ValidButtons) {
    return function button(props: Props) {
        const { children, className, onClick, forceCompact, inverted, type } = props;
        const componentClassName = classNames("jkl-button", "jkl-button--" + buttonType, className, {
            "jkl-button--compact": forceCompact,
            "jkl-button--inverted": inverted,
        });

        return (
            <button onClick={onClick} className={componentClassName} type={type}>
                {children}
            </button>
        );
    };
}

export const PrimaryButton = makeButtonComponent("primary");
export const SecondaryButton = makeButtonComponent("secondary");
export const TertiaryButton = makeButtonComponent("tertiary");
