import React, { FC } from "react";
import { Hamburger } from "../icons/Hamburger";
import { Close } from "../icons/Close";
import { variants } from "../icons/types";

interface Props {
    isBurger: boolean;
    variant?: variants;
    hamburgerTitle?: string;
    closeTitle?: string;
}

interface ShowProps {
    when: boolean;
}

const Show: FC<ShowProps> = ({ when, children }) => (
    <div className={`jkl-icons-animated__burger__icons jkl-icons-animated__burger__icons--${when ? "show" : "hide"}`}>
        {children}
    </div>
);

export const HamburgerCloseAnimated: FC<Props> = ({
    isBurger,
    variant = "small",
    hamburgerTitle = "meny",
    closeTitle = "lukk",
}) => {
    const iconSize = variant !== "inherit" ? variant : "small";

    return (
        <div className={`jkl-icon--${iconSize} jkl-icons-animated__burger`}>
            <Show when={isBurger}>
                <Hamburger variant={iconSize} title={hamburgerTitle} />
            </Show>
            <Show when={!isBurger}>
                <Close variant={iconSize} title={closeTitle} />
            </Show>
        </div>
    );
};

HamburgerCloseAnimated.displayName = "HamburgerCloseAnimated";
