import { Hamburger } from "@fremtind/jkl-hamburger-react";
import { useAnimatedHeight, useScreen } from "@fremtind/jkl-react-hooks";
// @ts-ignore: wait for nrk to supply types
import CoreToggle from "@nrk/core-toggle/jsx";
import cx from "classnames";
import { navigate } from "gatsby";
import React from "react";

import { isLeafItem, MenuItemList, RootItem, useFullscreenMenuContext } from "../../../contexts/fullscreenMenuContext";
import { FullScreenMenuItem } from "./FullScreenMenuItem";
import { useFullScreenMenuAnimaiton } from "./useFullScreenMenuAnimation";

import "./MainMenu.scss";

interface MainMenuProps {
    className?: string;
    items: MenuItemList;
}

export const MainMenu: React.FC<MainMenuProps> = ({ className, items }) => {
    const screen = useScreen();
    const isSmallScreen = screen.isSmallDevice || screen.isMediumDevice;

    const { isOpen, setIsOpen, currentItem, setCurrentItem, peekHistory, popHistory, pushHistory } =
        useFullscreenMenuContext();

    const [menuRef] = useAnimatedHeight(isOpen);
    const [controls] = useFullScreenMenuAnimaiton({ isOpen });

    const rootItem: RootItem = {
        linkText: "Hovedmeny",
        content: items,
    };
    const previousItem = peekHistory();

    const onNavigateForward = (newItem: RootItem, evt: React.MouseEvent) => {
        evt.preventDefault(); // prevent CoreToggle from closing menu
        if (currentItem) {
            pushHistory(currentItem);
        } else {
            pushHistory(rootItem);
        }
        setCurrentItem(newItem);
    };

    const onNavigateBackward = (evt: React.MouseEvent) => {
        evt.preventDefault(); // prevent CoreToggle from closing menu
        const previousItem = popHistory();
        if (previousItem) {
            setCurrentItem(previousItem);
        } else {
            setCurrentItem(rootItem);
        }
    };

    return (
        <nav className={cx("jkl-portal-main-menu", className)} aria-label="Hovedmeny">
            {isSmallScreen && (
                <Hamburger
                    onClick={(evt) => {
                        evt.preventDefault();
                        if (!currentItem) {
                            setCurrentItem(rootItem);
                        }
                        setIsOpen(!isOpen);
                    }}
                    isOpen={isOpen}
                />
            )}
            {!isSmallScreen && (
                <ul className="jkl-portal-main-menu__root-list">
                    {items.map((item) => (
                        <li className="jkl-portal-main-menu__root-item" key={`main-menu-${item.linkText}`}>
                            <button
                                data-testid={`full-screen-menu--${item.linkText}`}
                                className={cx("jkl-portal-main-menu__root-link", {
                                    "jkl-portal-main-menu__root-link--active": currentItem?.linkText === item.linkText,
                                })}
                                aria-haspopup="menu"
                                aria-expanded={currentItem?.linkText === item.linkText ? "true" : undefined}
                                onClick={(e) => {
                                    if (!isOpen) {
                                        setIsOpen(true);
                                    } else if (currentItem?.linkText === item.linkText) {
                                        // Toggle open state on repeat click
                                        setIsOpen(false);
                                    }
                                    onNavigateForward(item as RootItem, e);
                                }}
                            >
                                {item.linkText}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <CoreToggle
                forwardRef={menuRef}
                className={cx("jkl-portal-main-menu__overlay", {
                    "jkl-portal-main-menu__overlay--open": isOpen,
                })}
                popup={true}
                hidden={!isOpen}
            >
                <div className="jkl-portal-main-menu__menu-wrapper" role="menu">
                    {isSmallScreen && previousItem && (
                        <button
                            data-text={previousItem.linkText}
                            aria-label={`Tilbake til ${previousItem.linkText}`}
                            className="jkl-portal-main-menu__back-button"
                            onClick={onNavigateBackward}
                        >
                            ←
                        </button>
                    )}
                    <ul className="jkl-portal-main-menu__menu-items">
                        {currentItem &&
                            currentItem.content.map((item, idx) => (
                                <FullScreenMenuItem
                                    onClick={(evt) => {
                                        if (isLeafItem(item)) {
                                            navigate(item.content);
                                            setIsOpen(false);
                                        } else {
                                            onNavigateForward(item, evt);
                                        }
                                    }}
                                    item={item}
                                    key={item.linkText}
                                    controls={controls}
                                    idx={idx}
                                />
                            ))}
                    </ul>
                </div>
            </CoreToggle>
        </nav>
    );
};
