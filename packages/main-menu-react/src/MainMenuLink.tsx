import React from "react";
import classNames from "classnames";

import { FullScreenMenu } from "./FullScreenMenu";
import { MenuItem, isRootItem } from "./types";
import { useMainMenu } from "./contexts/mainMenuContext";
import { useFullscreenMenu } from "./contexts/fullScreenMenuContext";

interface Props {
    item: MenuItem;
}
export const MainMenuLink: React.FC<Props> = ({ item }) => {
    const path = item.basePath || "";
    const { navigationFunction, isActiveFunction } = useMainMenu();
    const { menuIsOpen } = useFullscreenMenu();
    const className = classNames({
        "jkl-main-menu__link": true,
        "jkl-main-menu__link--active": isActiveFunction(path, menuIsOpen),
    });
    return isRootItem(item) ? (
        <FullScreenMenu
            isActiveFunction={isActiveFunction}
            className="jkl-main-menu__link"
            activeClassName="jkl-main-menu__link--active"
            baseItem={item}
        />
    ) : (
        <button role="link" onClick={() => navigationFunction(item.content)} className={className}>
            {item.linkText}
        </button>
    );
};
