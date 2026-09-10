"use client";

import { Button } from "@fremtind/jokul/button";
import { Icon } from "@fremtind/jokul/icon";

import styles from "../../navigation.module.scss";

type Props = {
    expanded: boolean;
};

export const HamburgerButton = ({ expanded, ...props }: Props) => {
    const menuId = "global-menu";

    return (
        <Button
            {...props}
            aria-controls={menuId}
            aria-expanded={expanded}
            aria-label={expanded ? "Lukk meny" : "Åpne meny"}
            id={`${menuId}-button`}
            variant="ghost"
            icon={expanded ? <Icon>Close</Icon> : <Icon>Menu</Icon>}
            className={styles.hamburgerButton}
        />
    );
};
