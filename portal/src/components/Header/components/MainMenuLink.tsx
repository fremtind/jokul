import React from "react";
import classNames from "classnames";

import { FullScreenMenu } from "./FullScreenMenu";
import { MenuItem, isRootItem } from "./MainMenu";
import { useMainMenu } from "./mainMenuContext";

interface Props {
    item: MenuItem;
}
export const MainMenuLink: React.FC<Props> = ({ item }) => {
    const path = item.basePath || "";
    const { navigationFunction, isActiveFunction } = useMainMenu();
    const className = classNames({
        "jkl-portal-main-menu__link": true,
        "jkl-portal-main-menu__link--active": isActiveFunction(path),
    });
    return isRootItem(item) ? (
        <FullScreenMenu
            isActiveFunction={isActiveFunction}
            className="jkl-portal-main-menu__link"
            activeClassName="jkl-portal-main-menu__link--active"
            baseItem={item}
        />
    ) : (
        <button role="link" onClick={() => navigationFunction(item.content)} className={className}>
            {item.linkText}
        </button>
    );
};
