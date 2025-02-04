import { ChevronRightIcon } from "@fremtind/jokul";
import { clsx } from "clsx";
import type { FC, HTMLAttributes } from "react";
import styles from "./navigation-menu-item.module.scss";

export interface NavigationMenuButtonProps
    extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {}

export const NavigationMenuButton: FC<NavigationMenuButtonProps> = (props) => {
    const { className, children, ...buttonProps } = props;

    return (
        <button
            {...buttonProps}
            className={clsx(styles["navigation-menu-item"], className)}
        >
            {children}
            <ChevronRightIcon
                className={styles["navigation-menu-item__icon"]}
            />
        </button>
    );
};
