import React from "react";
import { navigate } from "gatsby";

import "./FullScreenMenuItem.scss";

export interface FullScreenMenuItemProps {
    path: string;
    title: string;
}
export function FullScreenMenuItem({ path, title }: FullScreenMenuItemProps) {
    const handleClick = () => {
        // wait for closing animation before navigating
        setTimeout(() => {
            navigate(path);
        }, 250);
    };
    return (
        <li className="jkl-portal-full-screen-menu-item">
            <button className="jkl-portal-full-screen-menu-item__link" type="button" onClick={handleClick}>
                {title}
            </button>
        </li>
    );
}
