import React from "react";
import { Hamburger } from "../icons/Hamburger";
import { Close } from "../icons/Close";
import { variants } from "../icons/types";

interface Props {
    isBurger: boolean;
    variant?: variants;
}

interface ShowProps {
    when: boolean;
}

const Show: React.FC<ShowProps> = ({ when, children }) => (
    <div className={`jkl-icons-animated__burger__icons jkl-icons-animated__burger__icons--${when ? "show" : "hide"}`}>
        {children}
    </div>
);

export const HamburgerCloseAnimated: React.FC<Props> = ({ isBurger, variant = "small" }) => {
    const iconSize = variant !== "inherit" ? variant : "small";

    return (
        <div className={`jkl-icon--${iconSize} jkl-icons-animated__burger`}>
            <Show when={isBurger}>
                <Hamburger variant={iconSize} />
            </Show>
            <Show when={!isBurger}>
                <Close variant={iconSize} />
            </Show>
        </div>
    );
};
