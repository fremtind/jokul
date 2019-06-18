import React, { MouseEventHandler, ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

type ValidButtons = "Primary" | "Secondary" | "Tertiary";

function makeButtonComponent(buttonType: ValidButtons) {
    return function button(props: Props) {
        const { children, className = "", onClick } = props;
        return (
            <button onClick={onClick} className={`jkl-button jkl-button--${buttonType} ${className}`}>
                <div className="jkl-button__label">{children}</div>
            </button>
        );
    };
}

export const PrimaryButton = makeButtonComponent("Primary");
export const SecondaryButton = makeButtonComponent("Secondary");
export const TertiaryButton = makeButtonComponent("Tertiary");
