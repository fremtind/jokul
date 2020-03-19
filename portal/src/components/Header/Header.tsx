import React, { useLayoutEffect, useState } from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import { useFullscreenMenu } from "../../contexts/fullscreenMenuContext";
import { useNavigationLinks } from "./useNavigationLinks";
import { FullScreenMenu } from "./components/FullScreenMenu";
import "./header.scss";

export const Header = () => {
    const { setMenuIsOpen } = useFullscreenMenu();
    const [collapsed, setCollapsed] = useState(false);
    useLayoutEffect(() => {
        setMenuIsOpen("");
        window &&
            window.addEventListener("scroll", () => {
                setCollapsed(window.scrollY > 96);
            });
    }, []);
    const { profileDocPages, getStartedDocPages, componentDocPages } = useNavigationLinks();
    const componentClassName = classNames({
        "jkl-portal-header": true,
        "jkl-portal-header--collapsed": collapsed,
    });

    return (
        <header className={componentClassName}>
            <Link onClick={() => setMenuIsOpen("")} to="/" className="jkl-portal-header__title">
                Jøkul
            </Link>
            <nav className="jkl-portal-header__navigation">
                <ul className="jkl-portal-header__navigation-list">
                    <li className="jkl-portal-header__navigation-item">
                        <FullScreenMenu filterable title="Profilen vår" items={profileDocPages} activePath="profil" />
                    </li>
                    <li className="jkl-portal-header__navigation-item">
                        <FullScreenMenu
                            filterable
                            title="Komponenter"
                            items={componentDocPages}
                            activePath="komponenter"
                        />
                    </li>
                    <li className="jkl-portal-header__navigation-item">
                        <FullScreenMenu title="Kom i gang" items={getStartedDocPages} activePath="komigang" />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
