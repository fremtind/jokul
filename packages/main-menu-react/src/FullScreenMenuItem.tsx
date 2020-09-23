import React from "react";

import { MenuItem, isLeafItem, RootItem } from "./types";
import { useMainMenu } from "./contexts/mainMenuContext";

interface Props {
    item: MenuItem;
    forwardFunction: (item: RootItem, evt?: React.MouseEvent) => void;
    idx: number;
}

export const FullScreenMenuItem: React.FC<Props> = ({ item, forwardFunction, idx }) => {
    const isLeaf = isLeafItem(item);
    const { navigationFunction } = useMainMenu();
    const staggerAnimation = { animationDelay: `${idx * 30 + 150}ms` };
    const handleClick = (evt: React.MouseEvent) =>
        isLeafItem(item) ? navigationFunction(item.content) : forwardFunction(item, evt);
    return (
        <li style={staggerAnimation} className="jkl-full-screen-menu-item" key={item.linkText}>
            <button
                className="jkl-nav-link jkl-full-screen-menu-item__link"
                type="button"
                data-testid={`full-screen-menu-item--${item.linkText.replace(/ /g, "-")}`}
                aria-expanded={isLeaf ? undefined : "false"}
                onClick={handleClick}
            >
                {item.linkText}
            </button>
        </li>
    );
};
