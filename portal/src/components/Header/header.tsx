import React, { useContext } from "react";
import { Link } from "gatsby";
import { ToggleSwitch } from "@fremtind/jkl-toggle-switch-react";

import { useNavigationLinks, DocumentationPageInfo } from "./useNavigationLinks";
import { themeContext } from "../../contexts/themeContext";
import { FullScreenMenu } from "./components/FullScreenMenu";
import "./Header.scss";

export const Header = () => {
    const { theme, toggleTheme } = useContext(themeContext);
    const { documentationPages, componentPages } = useNavigationLinks();
    const profileDocPages = documentationPages.filter((page: DocumentationPageInfo) => page.path.includes("profil"));
    const getStartedDocPages = documentationPages.filter((page: DocumentationPageInfo) =>
        page.path.includes("komigang"),
    );
    return (
        <header className="jkl-portal-header">
            <Link to="/" className="jkl-portal-header__title">
                <strong>Jøkul</strong> Designsystem
            </Link>
            <ToggleSwitch inverted={theme === "dark"} pressed={theme === "dark"} onClick={toggleTheme}>
                Dark mode
            </ToggleSwitch>
            <nav className="jkl-portal-header__navigation">
                <ul className="jkl-portal-header__navigation-list">
                    <li className="jkl-portal-header__navigation-item">
                        <FullScreenMenu title="Profilen vår" items={profileDocPages} />
                    </li>
                    <li className="jkl-portal-header__navigation-item">
                        <FullScreenMenu filterable title="Komponenter" items={componentPages} />
                    </li>
                    <li className="jkl-portal-header__navigation-item">
                        <FullScreenMenu title="Kom i gang" items={getStartedDocPages} />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
