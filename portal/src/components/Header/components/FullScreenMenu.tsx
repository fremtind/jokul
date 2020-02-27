import React, { useState, ChangeEvent } from "react";
import classNames from "classNames";
//@ts-ignore
import CoreToggle from "@nrk/core-toggle/jsx";
import { ActionTextField } from "@fremtind/jkl-text-input-react";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import { FullScreenMenuItem, FullScreenMenuItemProps } from "./FullScreenMenuItem";

import "./FullScreenMenu.scss";

interface CoreToggleSelectEvent {
    //detail: { textContent: string; value: string };
    detail: HTMLButtonElement | HTMLAnchorElement;
    target: { hidden: boolean; button: HTMLButtonElement; value: { textContent: string } };
}

interface FullScreenMenuProps {
    title: string;
    items: FullScreenMenuItemProps[];
    filterable?: boolean;
}
export function FullScreenMenu({ title, items, filterable }: FullScreenMenuProps) {
    const [filter, setFilter] = useState("");
    const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()));

    const [isOpen, setIsOpen] = useState(false);
    const [elementRef] = useAnimatedHeight(isOpen);
    const onToggle = () => setIsOpen(!isOpen);
    const onToggleSelect = (e: CoreToggleSelectEvent) => {
        setFilter("");
        console.log(e.detail);
        if (e.detail.className.includes("-menu-item__link") || e.detail.className.includes("full-screen-menu__close")) {
            e.target.hidden = true;
        }
    };

    const toggleClassName = classNames("jkl-portal-full-screen-menu-toggle", {
        "jkl-portal-full-screen-menu-toggle--active": isOpen,
    });
    const componentClassName = classNames("jkl-portal-full-screen-menu", {
        "jkl-portal-full-screen-menu--open": isOpen,
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
                            variant="small"
                            label="Filtrér"
                            value={filter}
                            onChange={handleFilter}
                            action={{ icon: "clear", label: "Nullstill filtrering", onClick: () => setFilter("") }}
                        />
                    )}
                    <button type="button" className="jkl-portal-full-screen-menu__close">
                        Lukk meny
                    </button>
                </div>
            </CoreToggle>
        </>
    );
}
