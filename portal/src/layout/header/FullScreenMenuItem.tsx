import { motion, AnimationControls } from "framer-motion";
import { Link } from "gatsby";
import React from "react";
import { isLeafItem, MenuItem } from "../../fullscreenMenuContext";
import "./FullScreenMenuItem.scss";

interface Props {
    item: MenuItem;
    onClick: (evt: React.MouseEvent) => void;
    idx: number;
    controls: AnimationControls;
}

export const FullScreenMenuItem: React.FC<Props> = ({ item, onClick, idx, controls }) => {
    const isLeaf = isLeafItem(item);

    if (isLeaf) {
        return (
            <motion.li custom={idx} animate={controls} className="jkl-portal-full-screen-menu-item" key={item.linkText}>
                <Link
                    data-testid={`full-screen-menu-item--${item.linkText.replace(/ /g, "-")}`}
                    className="jkl-nav-link jkl-portal-full-screen-menu-item__link"
                    to={item.content}
                    onClick={(e) => {
                        const holdingModifier = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                        if (holdingModifier) {
                            // onClick lukker menyen, men her ser det ut som brukeren prøver å åpne ting i nye faner.
                            // La de holde på så lenge de vil.
                            return;
                        }
                        onClick(e);
                    }}
                >
                    {item.linkText}
                </Link>
            </motion.li>
        );
    }

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
