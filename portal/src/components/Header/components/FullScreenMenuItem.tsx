import React from "react";

import { MenuItem, isLeafItem, CustomNavigation, defaultNavigationFunction, RootItem } from "./MainMenu";
import "./FullScreenMenuItem.scss";

interface Props extends CustomNavigation {
    item: MenuItem;
    forwardFunction: (item: RootItem, evt?: React.MouseEvent) => void;
}

export const FullScreenMenuItem: React.FC<Props> = ({
    item,
    navigationFunction = defaultNavigationFunction,
    forwardFunction,
}) => {
    const isLeaf = isLeafItem(item);
    const handleClick = (evt: React.MouseEvent) =>
        isLeafItem(item) ? navigationFunction(item.content) : forwardFunction(item, evt);
    return (
        <li className="jkl-portal-full-screen-menu-item">
            <button
                aria-expanded={isLeaf ? undefined : "false"}
                onClick={handleClick}
                type="button"
                role={isLeaf ? "link" : undefined}
                className="jkl-portal-full-screen-menu-item__link"
            >
                {item.linkText}
            </button>
        </li>
    );
};
