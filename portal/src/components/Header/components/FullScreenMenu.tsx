import React, { useState, ChangeEvent, useContext } from "react";
import classNames from "classnames";
import { Location } from "@reach/router";
//@ts-ignore
import CoreToggle from "@nrk/core-toggle/jsx";
import { ActionTextField } from "@fremtind/jkl-text-input-react";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { FullScreenMenuItem, FullScreenMenuItemProps } from "./FullScreenMenuItem";
import { themeContext } from "../../../contexts/themeContext";
import { fullscreenMenuContext } from "../../../contexts/fullscreenMenuContext";

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
    const { theme, toggleTheme } = useContext(themeContext);
    const { menuIsOpen, setMenuIsOpen } = useContext(fullscreenMenuContext);

    const [filter, setFilter] = useState("");
    const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()));

    const [isOpen, setIsOpen] = useState(false);
    const [elementRef] = useAnimatedHeight(isOpen);
    const onToggle = () => {
        setMenuIsOpen(!isOpen ? title : "");
        setIsOpen(!isOpen);
    };
    const onToggleSelect = (e: CoreToggleSelectEvent) => {
        setFilter("");
        if (e.detail.className.includes("-menu-item__link") || e.detail.className.includes("full-screen-menu__close")) {
            e.target.hidden = true;
        }
    };

    const componentClassName = classNames("jkl-portal-full-screen-menu", {
        "jkl-portal-full-screen-menu--open": isOpen,
    });

    return (
        <>
            <Location>
                {({ location }) => {
                    const isActivePath = activePath && location.pathname.includes(activePath);
                    const isActive =
                        isOpen || menuIsOpen === title || (isActivePath && (menuIsOpen === title || menuIsOpen == ""));

                    const toggleClassName = classNames("jkl-portal-full-screen-menu-toggle", {
                        "jkl-portal-full-screen-menu-toggle--active": isActive,
                    });

                    return <button className={toggleClassName}>{title}</button>;
                }}
            </Location>
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
                            <FullScreenMenuItem
                                idx={i}
                                key={item.title}
                                currentPath={location.pathname.split("/")[1]}
                                path={item.path}
                                title={item.title}
                            />
                        ))}
                    </ul>
                    {filterable && (
                        <ActionTextField
                            className="jkl-portal-full-screen-menu__filter"
                            variant="small"
                            label="Filtrér"
                            value={filter}
                            onChange={handleFilter}
                            action={{ icon: "clear", label: "Nullstill filtrering", onClick: () => setFilter("") }}
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
