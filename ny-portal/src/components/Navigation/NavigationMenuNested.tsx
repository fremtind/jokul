"use client";

import { useAnimatedHeight, useId } from "@fremtind/jokul";
import cn from "clsx";
import { usePathname } from "next/navigation";
import { FC, Fragment, useState } from "react";
import styles from "./navigation.module.scss";
import { NavChildItem } from "./NavigationMenu";
import { NavigationMenuButton } from "./NavigationMenuButton";
import { NavigationMenuLink } from "./NavigationMenuLink";

type NavigationMenuNestedProps = {
    title: string;
    parentPath?: string;
    items: NavChildItem[];
};

export const NavigationMenuNested: FC<NavigationMenuNestedProps> = ({
    title,
    parentPath,
    items,
}) => {
    const menuId = useId("navigation-menu-nested");
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(
        items.some((item) => pathname === `/${parentPath}/${item.slug}`),
    );
    const [menuRef] = useAnimatedHeight<HTMLDivElement>(isOpen);

    return (
        <Fragment>
            <NavigationMenuButton
                onClick={() => setIsOpen((open) => !open)}
                aria-expanded={isOpen}
                aria-controls={menuId}
                data-is-open={isOpen}
            >
                {title}
            </NavigationMenuButton>
            <div
                className={cn(
                    styles["navigation-menu"],
                    styles["navigation-menu--nested"],
                )}
                id={menuId}
                data-hidden={!isOpen}
                aria-hidden={!isOpen}
                ref={menuRef}
            >
                <ul>
                    {items.map((item) => {
                        const hasActiveChild =
                            pathname === `/${parentPath}/${item.slug}`;

                        return (
                            <li key={item.slug}>
                                <NavigationMenuLink
                                    label={item.title}
                                    path={item.slug ?? ""}
                                    parentPath={parentPath}
                                    data-has-active-child={hasActiveChild}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Fragment>
    );
};
