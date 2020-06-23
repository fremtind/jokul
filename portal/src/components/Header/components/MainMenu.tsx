import React from "react";
import classNames from "classnames";
import { useScreen } from "@fremtind/jkl-react-hooks";
import { Hamburger } from "@fremtind/jkl-hamburger-react";

import { FullScreenMenu } from "./FullScreenMenu";

import "./MainMenu.scss";

export type MenuItemList = Array<MenuItem>;

export type MenuItem = RootItem | LeafItem;

export interface LeafItem {
    linkText: string;
    content: string;
    basePath?: string;
}
export const isLeafItem = (item: MenuItem): item is LeafItem => typeof item.content === "string";

export interface RootItem {
    linkText: string;
    content: MenuItemList;
    basePath?: string;
}
export const isRootItem = (item: MenuItem): item is RootItem => typeof item.content !== "string";

export interface CustomNavigation {
    navigationFunction?: (path: string) => void;
}
export const defaultNavigationFunction = (path: string) => {
    window && window.location.assign(path);
};

interface MainMenuProps extends CustomNavigation {
    className?: string;
    items: MenuItemList;
    ariaLabel?: string;
    showTopLevel?: boolean;
    isActiveFunction?: (path: string) => boolean;
}

export const MainMenu: React.FC<MainMenuProps> = ({
    className = "",
    items,
    ariaLabel = "Hovedmeny",
    showTopLevel,
    navigationFunction,
    isActiveFunction,
    children,
}) => {
    const screen = useScreen();
    const shouldShowTopLevel = showTopLevel && !(screen.isSmallDevice || screen.isMediumDevice);
    const baseItem: RootItem = {
        linkText: ariaLabel || "Hovedmeny",
        content: items,
    };

    return (
        <nav className={"jkl-portal-main-menu " + className} aria-label={ariaLabel}>
            {shouldShowTopLevel ? (
                <ul className="jkl-portal-main-menu__list">
                    {items.map((item) => (
                        <li className="jkl-portal-main-menu__item" key={`main-menu-${item.linkText}`}>
                            <MainMenuLink
                                isActiveFunction={isActiveFunction}
                                navigationFunction={navigationFunction}
                                item={item}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <FullScreenMenu
                    className="jkl-portal-main-menu__link"
                    customButton={Hamburger}
                    baseItem={baseItem}
                    navigationFunction={navigationFunction}
                />
            )}
            {children}
        </nav>
    );
};

interface LinkProps extends CustomNavigation {
    item: MenuItem;
    isActiveFunction?: (path: string) => boolean;
}
const MainMenuLink: React.FC<LinkProps> = ({
    item,
    navigationFunction = defaultNavigationFunction,
    isActiveFunction = () => false,
}) => {
    const path = item.basePath || "";
    const className = classNames({
        "jkl-portal-main-menu__link": true,
        "jkl-portal-main-menu__link--active": isActiveFunction(path),
    });
    return isRootItem(item) ? (
        <FullScreenMenu
            isActiveFunction={isActiveFunction}
            className="jkl-portal-main-menu__link"
            activeClassName="jkl-portal-main-menu__link--active"
            baseItem={item}
            navigationFunction={navigationFunction}
        />
    ) : (
        <button role="link" onClick={() => navigationFunction(item.content)} className={className}>
            {item.linkText}
        </button>
    );
};
