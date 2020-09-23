import React from "react";
import { useScreen } from "@fremtind/jkl-react-hooks";
import { Hamburger } from "@fremtind/jkl-hamburger-react";

import {
    mainMenuContext,
    NavigationFunction,
    IsActiveFunction,
    defaultNavigationFunction,
    defaultIsActiveFunction,
} from "./contexts/mainMenuContext";
import { MenuItemList, RootItem } from "./types";
import { FSMenuContextProvider } from "./contexts/fullScreenMenuContext";
import { FullScreenMenu } from "./FullScreenMenu";
import { MainMenuLink } from "./MainMenuLink";

interface MainMenuProps {
    className?: string;
    items: MenuItemList;
    ariaLabel?: string;
    showTopLevel?: boolean;
    navigationFunction?: NavigationFunction;
    isActiveFunction?: IsActiveFunction;
    reduceMotion?: boolean;
}

export const MainMenu: React.FC<MainMenuProps> = ({
    className = "",
    items,
    ariaLabel = "Hovedmeny",
    showTopLevel,
    navigationFunction = defaultNavigationFunction,
    isActiveFunction = defaultIsActiveFunction,
    reduceMotion = false,
    children,
}) => {
    const screen = useScreen();
    const shouldShowTopLevel = showTopLevel && !(screen.isSmallDevice || screen.isMediumDevice);
    const baseItem: RootItem = {
        linkText: ariaLabel || "Hovedmeny",
        content: items,
    };

    return (
        <mainMenuContext.Provider value={{ navigationFunction, isActiveFunction, reduceMotion }}>
            <FSMenuContextProvider>
                <nav className={"jkl-main-menu " + className} aria-label={ariaLabel}>
                    {shouldShowTopLevel ? (
                        <>
                            <ul className="jkl-main-menu__list">
                                {items.map((item) => (
                                    <li className="jkl-main-menu__item" key={`main-menu-${item.linkText}`}>
                                        <MainMenuLink item={item} />
                                    </li>
                                ))}
                            </ul>
                            {children && <div className="jkl-layout-spacing--medium-left">{children}</div>}
                        </>
                    ) : (
                        <FullScreenMenu className="jkl-main-menu__link" customButton={Hamburger} baseItem={baseItem}>
                            {children}
                        </FullScreenMenu>
                    )}
                </nav>
            </FSMenuContextProvider>
        </mainMenuContext.Provider>
    );
};
