import React from "react";
import { navigate } from "gatsby";

import { useFullscreenMenu } from "../../../contexts/fullscreenMenuContext";
import { useLocation } from "../../../contexts/locationContext";
import "./FullScreenMenuItem.scss";

export interface FullScreenMenuItemProps {
    idx: number;
    path: string;
    title: string;
}
export function FullScreenMenuItem({ idx, path, title }: FullScreenMenuItemProps) {
    const { setMenuIsOpen } = useFullscreenMenu();
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
                data-testid={`fullscreen-menu-${title.replace(/ /g, "-")}`}
            >
                {title}
            </button>
        </li>
    );
}
