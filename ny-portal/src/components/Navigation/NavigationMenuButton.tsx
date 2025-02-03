import { ChevronRightIcon } from "@fremtind/jokul";
import cn from "classnames";
import type { FC, HTMLAttributes } from "react";
import styles from "./navigation-menu-item.module.scss";

export interface NavigationMenuButtonProps
    extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    linkTo?: string;
}

export const NavigationMenuButton: FC<NavigationMenuButtonProps> = (props) => {
    const { className, children, linkTo, ...buttonProps } = props;

    return (
        <button
            {...buttonProps}
            className={cn(styles["navigation-menu-item"], className)}
        >
            {children}
            <ChevronRightIcon
                className={styles["navigation-menu-item__icon"]}
            />
        </button>
    );
};
