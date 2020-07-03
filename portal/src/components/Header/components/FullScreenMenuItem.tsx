import React from "react";

import { MenuItem, isLeafItem, CustomNavigation, defaultNavigationFunction, RootItem } from "./MainMenu";
import "./FullScreenMenuItem.scss";
import { motion, AnimationControls } from "framer-motion";

interface Props extends CustomNavigation {
    item: MenuItem;
    forwardFunction: (item: RootItem, evt?: React.MouseEvent) => void;
    idx: number;
    controls: AnimationControls;
}

export const FullScreenMenuItem: React.FC<Props> = ({
    item,
    navigationFunction = defaultNavigationFunction,
    forwardFunction,
    idx,
    controls,
}) => {
    const isLeaf = isLeafItem(item);
    const handleClick = (evt: React.MouseEvent) =>
        isLeafItem(item) ? navigationFunction(item.content) : forwardFunction(item, evt);
    return (
        <motion.li custom={idx} animate={controls} className="jkl-portal-full-screen-menu-item" key={item.linkText}>
            <button
                className="jkl-portal-full-screen-menu-item__link"
                type="button"
                data-testid={`full-screen-menu-item--${item.linkText.replace(/ /g, "-")}`}
                aria-expanded={isLeaf ? undefined : "false"}
                onClick={handleClick}
            >
                {item.linkText}
            </button>
        </motion.li>
    );
};
