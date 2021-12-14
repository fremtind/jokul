import { Hamburger } from "@fremtind/jkl-hamburger-react";
import { useAnimatedHeight, useScreen } from "@fremtind/jkl-react-hooks";
import cx from "classnames";
import { navigate } from "gatsby";
import React, { useEffect } from "react";

import { isLeafItem, MenuItemList, RootItem, useFullscreenMenuContext } from "../../../contexts/fullscreenMenuContext";
import { FullScreenMenuItem } from "./FullScreenMenuItem";
import { useFullScreenMenuAnimaiton } from "./useFullScreenMenuAnimation";

import "./MainMenu.scss";
import { MainMenuItem } from "./MainMenuItem";

interface MainMenuProps {
    className?: string;
    items: MenuItemList;
}

export const MainMenu: React.FC<MainMenuProps> = ({ className, items }) => {
    const screen = useScreen();
    const isSmallScreen = screen.isSmallDevice || screen.isMediumDevice;

    const { isOpen, setIsOpen, currentItem, setCurrentItem, peekHistory, popHistory, pushHistory } =
        useFullscreenMenuContext();

    const [menuRef] = useAnimatedHeight<HTMLDivElement>(isOpen);
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

    useEffect(() => {
        const escapeListener = (event: globalThis.KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };
        window.addEventListener<"keyup">("keyup", escapeListener);

        return () => {
            window.removeEventListener<"keyup">("keyup", escapeListener);
        };
    }, [setIsOpen]);

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
            <div
                ref={menuRef}
                className={cx("jkl-portal-main-menu__overlay", {
                    "jkl-portal-main-menu__overlay--open": isOpen,
                })}
                aria-hidden={isOpen ? "false" : "true"}
            >
                <div className="jkl-portal-main-menu__menu-wrapper">
                    {isSmallScreen && (
                        <>
                            {previousItem && (
                                <button
                                    data-text={previousItem.linkText}
                                    aria-label={`Tilbake til ${previousItem.linkText}`}
                                    className="jkl-portal-main-menu__back-button"
                                    onClick={onNavigateBackward}
                                >
                                    ←
                                </button>
                            )}
                            <ul className="jkl-portal-main-menu__menu-items" role="menu">
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
                        </>
                    )}
                </div>
            </div>
            {!isSmallScreen && (
                <ul className="jkl-portal-main-menu__root-list">
                    {items.map((item) => (
                        <li className="jkl-portal-main-menu__root-item" key={`main-menu-${item.linkText}`}>
                            <MainMenuItem
                                isActive={currentItem?.basePath === item.basePath}
                                isOpen={isOpen && currentItem?.basePath === item.basePath}
                                label={item.linkText}
                                onClick={(e) => {
                                    if (!isOpen) {
                                        setIsOpen(true);
                                    } else if (currentItem?.basePath === item.basePath) {
                                        // Toggle open state on repeat click
                                        setIsOpen(false);
                                    }
                                    onNavigateForward(item as RootItem, e);
                                }}
                            >
                                {(currentItem || (item as RootItem)).content.map((itm, idx) => (
                                    <FullScreenMenuItem
                                        onClick={(evt) => {
                                            if (isLeafItem(itm)) {
                                                navigate(itm.content);
                                                setIsOpen(false);
                                            } else {
                                                onNavigateForward(itm, evt);
                                            }
                                        }}
                                        item={itm}
                                        key={itm.linkText}
                                        controls={controls}
                                        idx={idx}
                                    />
                                ))}
                            </MainMenuItem>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};
