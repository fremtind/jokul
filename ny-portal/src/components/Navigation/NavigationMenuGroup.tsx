"use client";

import { useAnimatedHeight } from "@fremtind/jokul";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FC, useId, useState } from "react";
import styles from "./navigation.module.scss";
import { NavigationMenuButton } from "./NavigationMenuButton";
import { NavigationMenuLink } from "./NavigationMenuLink";
import { ComponentsQueryResult, Slug } from "@/sanity/types";

type NavigationMenuGroupProps = {
    name: string;
    parentPath: string;
    items: ComponentsQueryResult;
};

export const NavigationMenuGroup: FC<NavigationMenuGroupProps> = ({
    name,
    parentPath,
    items,
}) => {
    const menuId = `navigation-menu-group-${useId()}`;
    const pathname = usePathname();

    const getItemPath = (slug: Slug | null) =>
        `/${parentPath}${slug ? `/${slug}` : ""}`;

    const [isOpen, setIsOpen] = useState(
        items.some((item) => pathname === getItemPath(item.slug)),
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
                {name}
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
                    {items.map((item) => {
                        const { slug, name } = item;
                        const isActive = pathname === getItemPath(slug);

                        return (
                            <NavigationMenuLink
                                key={`${slug}-${name}`}
                                title={name ?? "Untitled"}
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
