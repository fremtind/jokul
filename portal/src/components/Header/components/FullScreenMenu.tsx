import React, { useState, ChangeEvent } from "react";
import classNames from "classnames";
//@ts-ignore
import CoreToggle from "@nrk/core-toggle/jsx";
import { ActionTextField } from "@fremtind/jkl-text-input-react";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { FullScreenMenuItem, FullScreenMenuItemProps } from "./FullScreenMenuItem";
import { useTheme } from "../../../contexts/themeContext";
import { useFullscreenMenu } from "../../../contexts/fullscreenMenuContext";
import { useLocation } from "../../../contexts/locationContext";

import "./FullScreenMenu.scss";

interface CoreToggleSelectEvent {
    detail: HTMLButtonElement | HTMLAnchorElement;
    target: { hidden: boolean; button: HTMLButtonElement; value: { textContent: string } };
}

interface FullScreenMenuProps {
    title: string;
    items: FullScreenMenuItemProps[];
    filterable?: boolean;
    activePath?: string;
}
export function FullScreenMenu({ title, items, filterable, activePath }: FullScreenMenuProps) {
    const { theme, toggleTheme } = useTheme();
    const { menuIsOpen, setMenuIsOpen } = useFullscreenMenu();

    const [isOpen, setIsOpen] = useState(false);
    const { currentSection } = useLocation();
    const pathIsActive = activePath && currentSection.includes(activePath);
    const isActive =
        isOpen || // this menu is open, OR
        menuIsOpen === activePath || // open menu is the current menu, OR
        (pathIsActive && // the page is a subpage of this menu, AND
            (menuIsOpen === activePath || menuIsOpen == "")); // open menu is either this menu or no menu

    const [filter, setFilter] = useState("");
    const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()));

    const [elementRef] = useAnimatedHeight(isOpen);
    const onToggle = () => {
        if (isOpen && currentSection === activePath) {
            setMenuIsOpen("");
        } else if (!isOpen) {
            setMenuIsOpen(activePath || "");
        }
        setIsOpen(!isOpen);
    };
    const onToggleSelect = (e: CoreToggleSelectEvent) => {
        setFilter("");
        if (e.detail.className.includes("full-screen-menu__close")) {
            setMenuIsOpen("");
        }
        if (e.detail.className.includes("-menu-item__link") || e.detail.className.includes("full-screen-menu__close")) {
            e.target.hidden = true;
        }
    };

    const componentClassName = classNames("jkl-portal-full-screen-menu", {
        "jkl-portal-full-screen-menu--open": isOpen,
    });
    const toggleClassName = classNames("jkl-portal-full-screen-menu-toggle", {
        "jkl-portal-full-screen-menu-toggle--active": isActive,
    });

    return (
        <>
            <button className={toggleClassName}>{title}</button>
            <CoreToggle
                popup
                className={componentClassName}
                ref={elementRef}
                hidden={!isOpen}
                onToggle={onToggle}
                onToggleSelect={onToggleSelect}
            >
                <div className="jkl-portal-full-screen-menu__wrapper">
                    <ul className="jkl-portal-full-screen-menu__items">
                        {filteredItems.map((item, i) => (
                            <FullScreenMenuItem idx={i} key={item.title} path={item.path} title={item.title} />
                        ))}
                    </ul>
                    {filterable && (
                        <ActionTextField
                            className="jkl-portal-full-screen-menu__filter"
                            variant="small"
                            label="Filtrér"
                            value={filter}
                            onChange={handleFilter}
                            action={{
                                icon: "clear",
                                label: "Nullstill filtrering",
                                onClick: () => setFilter(""),
                            }}
                        />
                    )}
                    <ToggleSwitch
                        className="jkl-portal-full-screen-menu__darkmode-switch"
                        inverted={theme === "dark"}
                        pressed={theme === "dark"}
                        onClick={toggleTheme}
                    >
                        Dark mode
                    </ToggleSwitch>
                    <button type="button" className="jkl-portal-full-screen-menu__close">
                        Lukk meny
                    </button>
                </div>
            </CoreToggle>
        </>
    );
}
