import React, { useContext } from "react";
import { navigate } from "gatsby";

import { fullscreenMenuContext } from "../../../contexts/fullscreenMenuContext";
import { useLocation } from "../../../contexts/locationContext";
import "./FullScreenMenuItem.scss";

export interface FullScreenMenuItemProps {
    idx: number;
    path: string;
    title: string;
}
export function FullScreenMenuItem({ idx, path, title }: FullScreenMenuItemProps) {
    const { setMenuIsOpen } = useContext(fullscreenMenuContext);
    const { currentSection } = useLocation();
    const handleClick = () => {
        // wait for closing animation before navigating
        setTimeout(() => {
            navigate(path, { state: { lastPath: currentSection } });
            setMenuIsOpen(path.split("/")[1]);
        }, 300);
    };
    const staggerAnimation = { animationDelay: `${idx * 20}ms` };

    return (
        <li style={staggerAnimation} className="jkl-portal-full-screen-menu-item">
            <button
                style={staggerAnimation}
                className="jkl-portal-full-screen-menu-item__link"
                type="button"
                onClick={handleClick}
            >
                {title}
            </button>
        </li>
    );
}
