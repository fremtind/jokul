import { Button } from "@fremtind/jkl-button-react";
import { CloseIcon, HamburgerIcon } from "@fremtind/jkl-icons-react";
import { useAnimatedHeight, useScreen } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { useEffect } from "react";
import { isLeafItem, MenuItemList, RootItem, useFullscreenMenuContext } from "../../fullscreenMenuContext";
import { FullScreenMenuItem } from "./FullScreenMenuItem";
import "./MainMenu.scss";
import { MainMenuItem } from "./MainMenuItem";
import { useFullScreenMenuAnimaiton } from "./useFullScreenMenuAnimation";

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

    const onNavigateForward = (newItem: RootItem) => {
        if (currentItem) {
            pushHistory(currentItem);
        } else {
            pushHistory(rootItem);
        }
        setCurrentItem(newItem);
    };

    const onNavigateBackward = () => {
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
        <nav className={cn("jkl-portal-main-menu", className)} aria-label="Hovedmeny">
            {isSmallScreen && (
                <Button
                    variant="ghost"
                    iconLeft={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={`${isOpen ? "Lukk" : "Åpne"} meny`}
                    id="jkl-portal-main-menu-hamburger"
                    aria-controls="jkl-portal-main-menu-overlay"
                    onClick={() => {
                        if (!currentItem) {
                            setCurrentItem(rootItem);
                        }
                        setIsOpen(!isOpen);
                    }}
                />
            )}
            <div
                ref={menuRef}
                aria-labelledby="jkl-portal-main-menu-hamburger"
                id="jkl-portal-main-menu-overlay"
                role="group"
                hidden={!isOpen}
                className={cn("jkl-portal-main-menu__overlay", {
                    "jkl-portal-main-menu__overlay--open": isOpen,
                })}
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
                                            onClick={() => {
                                                if (isLeafItem(item)) {
                                                    setIsOpen(false);
                                                } else {
                                                    onNavigateForward(item);
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
                                onClick={() => {
                                    if (!isOpen) {
                                        setIsOpen(true);
                                    } else if (currentItem?.basePath === item.basePath) {
                                        // Toggle open state on repeat click
                                        setIsOpen(false);
                                    }
                                    onNavigateForward(item as RootItem);
                                }}
                            >
                                {(currentItem || (item as RootItem)).content.map((itm, idx) => (
                                    <FullScreenMenuItem
                                        onClick={() => {
                                            if (isLeafItem(itm)) {
                                                setIsOpen(false);
                                            } else {
                                                onNavigateForward(itm);
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
