import React, { MouseEventHandler, ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

type ValidButtons = "primary" | "secondary" | "tertiary";

function makeButtonComponent(buttonType: ValidButtons) {
    return function button(props: Props) {
        const { children, className = "", onClick } = props;
        return (
            <button onClick={onClick} className={`jkl-button jkl-button--${buttonType} ${className}`}>
                {children}
            </button>
        );
    };
}

export const PrimaryButton = makeButtonComponent("primary");
export const SecondaryButton = makeButtonComponent("secondary");
export const TertiaryButton = makeButtonComponent("tertiary");
