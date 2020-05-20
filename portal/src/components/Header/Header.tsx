import React, { useLayoutEffect, useState } from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import { useFullscreenMenu } from "../../contexts/fullscreenMenuContext";
import { useNavigationLinks } from "./useNavigationLinks";
import { FullScreenMenu } from "./components/FullScreenMenu";
import "./header.scss";

export const Header = ({ className }: { className?: string }) => {
    const { setMenuIsOpen } = useFullscreenMenu();
    const [collapsed, setCollapsed] = useState(false);
    useLayoutEffect(() => {
        setMenuIsOpen("");
        window &&
            window.addEventListener("scroll", () => {
                setCollapsed(window.scrollY > 96);
            });
    }, [setMenuIsOpen]);
    const { profileDocPages, getStartedDocPages, componentDocPages, PageType } = useNavigationLinks();
    const componentClassName = classNames(
        {
            "jkl-portal-header": true,
            "jkl-portal-header--collapsed": collapsed,
        },
        className,
    );

    function hideOpenMenus() {
        const openMenus = document && document.querySelectorAll(".jkl-portal-full-screen-menu--open");
        openMenus.forEach((menu) => {
            menu.setAttribute("hidden", "true"); // hide all open full screen menus
        });
        setMenuIsOpen(""); // reset open menu in context to remove active marker
    }

    return (
        <header className={componentClassName}>
            <Link to="/" onClick={hideOpenMenus} className="jkl-portal-header__title">
                Jøkul
            </Link>
            <nav className="jkl-portal-header__navigation">
                <ul className="jkl-portal-header__navigation-list">
                    <li className="jkl-portal-header__navigation-item">
                        <FullScreenMenu
                            filterable
                            title="Profilen vår"
                            items={profileDocPages}
                            activePath={PageType.PROFIL}
                        />
                    </li>
                    <li className="jkl-portal-header__navigation-item">
                        <FullScreenMenu
                            filterable
                            title="Komponenter"
                            items={componentDocPages}
                            activePath={PageType.KOMPONENTER}
                        />
                    </li>
                    <li className="jkl-portal-header__navigation-item">
                        <FullScreenMenu title="Kom i gang" items={getStartedDocPages} activePath={PageType.KOMIGANG} />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
