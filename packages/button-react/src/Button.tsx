import React, { MouseEventHandler, ReactNode } from "react";
import cx from "classnames";

interface Props {
    children: ReactNode;
    className?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    forceCompact?: boolean;
    inverted?: boolean;
}

type ValidButtons = "primary" | "secondary" | "tertiary";

function makeButtonComponent(buttonType: ValidButtons) {
    return function button(props: Props) {
        const { children, className = "", onClick, forceCompact, inverted } = props;
        const componentClassName = cx("jkl-button", "jkl-button--" + buttonType, className, {
            "jkl-button--compact": forceCompact,
            "jkl-button--inverted": inverted,
        });

        return (
            <button onClick={onClick} className={componentClassName}>
                {children}
            </button>
        );
    };
}

export const PrimaryButton = makeButtonComponent("primary");
export const SecondaryButton = makeButtonComponent("secondary");
export const TertiaryButton = makeButtonComponent("tertiary");
