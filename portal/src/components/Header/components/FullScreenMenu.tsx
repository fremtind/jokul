import React, { useState, useEffect } from "react";
// @ts-ignore: wait for nrk to supply types
import CoreToggle from "@nrk/core-toggle/jsx";
import classNames from "classnames";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";

import { RootItem, CustomNavigation } from "./MainMenu";
import { FullScreenMenuItem } from "./FullScreenMenuItem";
import { useFullscreenMenu } from "../../../contexts/fullscreenMenuContext";
import { useFullScreenMenuAnimaiton } from "./useFullScreenMenuAnimation";

import "./FullScreenMenu.scss";

interface CoreToggleSelectEvent {
    detail: HTMLButtonElement | HTMLAnchorElement;
    target: { hidden: boolean; button: HTMLButtonElement; value: { textContent: string } };
}

interface FullScreenMenuProps extends CustomNavigation {
    className?: string;
    activeClassName?: string;
    baseItem: RootItem;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    customButton?: React.FC<any>;
    isActiveFunction?: (path: string) => boolean;
}

export const FullScreenMenu: React.FC<FullScreenMenuProps> = ({
    className,
    activeClassName,
    baseItem,
    customButton,
    isActiveFunction,
    navigationFunction,
}) => {
    const CustomButton = customButton; // Need capital letter to please the linter
    const [isOpen, setIsOpen] = useState(false);
    const [menuRef] = useAnimatedHeight(isOpen);
    const { setMenuIsOpen, menuIsOpen } = useFullscreenMenu();

    const [currentItem, setCurrentItem] = useState(baseItem);
    const [previousItem, setPreviousItem] = useState<RootItem>();
    const [history, setHistory] = useState<RootItem[]>([]);

    const [controls] = useFullScreenMenuAnimaiton({ isOpen });

    const onNavigateForward = (newItem: RootItem, evt?: React.MouseEvent) => {
        evt && evt.preventDefault(); // prevent CoreToggle from closing menu
        setHistory([...history, currentItem]);
        setCurrentItem(newItem);
    };
    const onNavigateBackward = (evt: React.MouseEvent) => {
        evt.preventDefault(); // prevent CoreToggle from closing menu
        previousItem && setCurrentItem(previousItem);
        setHistory((history) => history.filter((item) => item !== previousItem));
    };
    useEffect(() => {
        // set previousItem to last item in history whenever history is updated
        setPreviousItem(history.slice(-1)[0]);
    }, [history]);

    const isActive = isOpen || (isActiveFunction && isActiveFunction(baseItem.basePath || ""));

    const buttonClassName = classNames(className, {
        [`${activeClassName}`]: isActive,
    });
    const menuClassName = classNames({
        "jkl-portal-full-screen-menu": true,
        "jkl-portal-full-screen-menu--open": isOpen,
    });

    const basePath = baseItem.basePath || "";
    const onToggle = () => {
        if (isOpen) {
            if (menuIsOpen === basePath) {
                setMenuIsOpen("");
            }
        } else {
            setMenuIsOpen(basePath);
        }
        setIsOpen(!isOpen);
    };
    const onToggleSelect = (e: CoreToggleSelectEvent) => {
        e.target.hidden = true;
    };

    return (
        <>
            {CustomButton ? (
                <CustomButton />
            ) : (
                <button data-testid={`full-screen-menu--${baseItem.linkText}`} className={buttonClassName}>
                    {baseItem.linkText}
                </button>
            )}
            <CoreToggle
                onToggle={onToggle}
                onToggleSelect={onToggleSelect}
                forwardRef={menuRef}
                className={menuClassName}
                popup
                hidden
            >
                <div className="jkl-portal-full-screen-menu__wrapper">
                    {previousItem && (
                        <button
                            data-text={previousItem.linkText}
                            aria-label={`Tilbake til ${previousItem.linkText}`}
                            className="jkl-portal-full-screen-menu__back-button"
                            onClick={onNavigateBackward}
                        >
                            ←
                        </button>
                    )}
                    <ul className="jkl-portal-full-screen-menu__items">
                        {currentItem.content.map((item, idx) => (
                            <FullScreenMenuItem
                                forwardFunction={onNavigateForward}
                                navigationFunction={navigationFunction}
                                item={item}
                                key={item.linkText}
                                controls={controls}
                                idx={idx}
                            />
                        ))}
                    </ul>
                </div>
            </CoreToggle>
        </>
    );
};
