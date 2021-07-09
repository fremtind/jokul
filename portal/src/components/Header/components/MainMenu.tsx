import React from "react";
import { useScreen } from "@fremtind/jkl-react-hooks";

import { mainMenuContext, NavigationFunction, defaultNavigationFunction } from "./mainMenuContext";
import { FullScreenMenu } from "./FullScreenMenu";
import { MainMenuLink } from "./MainMenuLink";

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

interface MainMenuProps {
    className?: string;
    items: MenuItemList;
    ariaLabel?: string;
    showTopLevel?: boolean;
    navigationFunction?: NavigationFunction;
    isActiveFunction?: (path: string) => boolean;
}

export const MainMenu: React.FC<MainMenuProps> = ({
    className = "",
    items,
    ariaLabel = "Hovedmeny",
    showTopLevel,
    navigationFunction = defaultNavigationFunction,
    isActiveFunction = () => false,
    children,
}) => {
    const screen = useScreen();
    const shouldShowTopLevel = showTopLevel && !(screen.isSmallDevice || screen.isMediumDevice);
    const baseItem: RootItem = {
        linkText: ariaLabel || "Hovedmeny",
        content: items,
    };

    return (
        <mainMenuContext.Provider value={{ navigationFunction, isActiveFunction }}>
            <nav className={"jkl-portal-main-menu " + className} aria-label={ariaLabel}>
                {shouldShowTopLevel ? (
                    <ul className="jkl-portal-main-menu__list">
                        {items.map((item) => (
                            <li className="jkl-portal-main-menu__item" key={`main-menu-${item.linkText}`}>
                                <MainMenuLink item={item} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <FullScreenMenu className="jkl-portal-main-menu__link" showHamburger baseItem={baseItem} />
                )}
                {children}
            </nav>
        </mainMenuContext.Provider>
    );
};
