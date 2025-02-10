"use client";

import { useAnimatedHeight } from "@fremtind/jokul";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FC, useId, useState } from "react";
import styles from "./navigation.module.scss";
import { MenuItems } from "./NavigationMenu";
import { NavigationMenuButton } from "./NavigationMenuButton";
import { NavigationMenuLink } from "./NavigationMenuLink";

type NavigationMenuGroupProps = {
    title: string;
    parentPath: string;
    items: MenuItems[];
};

export const NavigationMenuGroup: FC<NavigationMenuGroupProps> = ({
    title,
    parentPath,
    items,
}) => {
    const menuId = `navigation-menu-group-${useId()}`;
    const pathname = usePathname();

    const getItemPath = (slug?: string) =>
        `/${parentPath}${slug ? `/${slug}` : ""}`;

    const [isOpen, setIsOpen] = useState(
        items.some(({ slug }) => pathname === getItemPath(slug)),
    );

    const [menuRef] = useAnimatedHeight<HTMLDivElement>(isOpen);

    return (
        <li>
            <NavigationMenuButton
                onClick={() => setIsOpen((open) => !open)}
                aria-expanded={isOpen}
                aria-controls={menuId}
                data-is-open={isOpen}
            >
                {title}
            </NavigationMenuButton>
            <div
                className={clsx(
                    styles["navigation-menu"],
                    styles["navigation-menu--group"],
                )}
                id={menuId}
                data-hidden={!isOpen}
                aria-hidden={!isOpen}
                ref={menuRef}
            >
                <ul>
                    {items.map(({ slug, title }) => {
                        const isActive = pathname === getItemPath(slug);

                        return (
                            <NavigationMenuLink
                                key={`${slug}-${title}`}
                                title={title}
                                path={slug}
                                parentPath={parentPath}
                                data-has-active-child={isActive}
                            />
                        );
                    })}
                </ul>
            </div>
        </li>
    );
};
