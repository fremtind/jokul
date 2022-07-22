import { WithChildren } from "@fremtind/jkl-core";
import cx from "classnames";
import React, { FC } from "react";
import { Close } from "../icons/Close";
import { Hamburger } from "../icons/Hamburger";
import { IconVariant } from "../icons/types";

export interface HamburgerCloseAnimatedProps {
    className?: string;
    isBurger: boolean;
    variant?: IconVariant;
    hamburgerTitle?: string;
    closeTitle?: string;
}

interface ShowProps extends WithChildren {
    when: boolean;
}

const Show: FC<ShowProps> = ({ when, children }) => (
    <div className={`jkl-icons-animated__burger__icons jkl-icons-animated__burger__icons--${when ? "show" : "hide"}`}>
        {children}
    </div>
);

export const HamburgerCloseAnimated: FC<HamburgerCloseAnimatedProps> = ({
    className,
    isBurger,
    variant = "small",
    hamburgerTitle = "meny",
    closeTitle = "lukk",
    ...rest
}) => {
    const iconSize = variant !== "inherit" ? variant : "small";

    return (
        <div {...rest} className={cx(`jkl-icon--${iconSize}`, "jkl-icons-animated__burger", className)}>
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
