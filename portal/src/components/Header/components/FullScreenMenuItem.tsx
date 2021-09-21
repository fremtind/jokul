import React from "react";
import { motion, AnimationControls } from "framer-motion";
import { isLeafItem, MenuItem } from "../../../contexts/fullscreenMenuContext";

import "./FullScreenMenuItem.scss";

interface Props {
    item: MenuItem;
    onClick: (evt: React.MouseEvent) => void;
    idx: number;
    controls: AnimationControls;
}

export const FullScreenMenuItem: React.FC<Props> = ({ item, onClick, idx, controls }) => {
    const isLeaf = isLeafItem(item);
    return (
        <motion.li custom={idx} animate={controls} className="jkl-portal-full-screen-menu-item" key={item.linkText}>
            <button
                className="jkl-nav-link jkl-portal-full-screen-menu-item__link"
                type="button"
                data-testid={`full-screen-menu-item--${item.linkText.replace(/ /g, "-")}`}
                aria-expanded={isLeaf ? undefined : "false"}
                onClick={onClick}
            >
                {item.linkText}
            </button>
        </motion.li>
    );
};
