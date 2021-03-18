import React, { FC } from "react";
import { Hamburger } from "../icons/Hamburger";
import { Close } from "../icons/Close";
import { variants } from "../icons/types";

interface Props {
    isBurger: boolean;
    variant?: variants;
    title?: [string, string];
}

interface ShowProps {
    when: boolean;
}

const Show: FC<ShowProps> = ({ when, children }) => (
    <div className={`jkl-icons-animated__burger__icons jkl-icons-animated__burger__icons--${when ? "show" : "hide"}`}>
        {children}
    </div>
);

export const HamburgerCloseAnimated: FC<Props> = ({ isBurger, variant = "small", title = ["meny", "lukk"] }) => {
    const iconSize = variant !== "inherit" ? variant : "small";

    return (
        <div className={`jkl-icon--${iconSize} jkl-icons-animated__burger`}>
            <Show when={isBurger}>
                <Hamburger variant={iconSize} title={title[0]} />
            </Show>
            <Show when={!isBurger}>
                <Close variant={iconSize} title={title[1]} />
            </Show>
        </div>
    );
};

HamburgerCloseAnimated.displayName = "HamburgerCloseAnimated";
