import React from "react";
import { Link } from "gatsby";

import { useNavigationLinks, DocumentationPageInfo } from "./useNavigationLinks";
import { FullScreenMenu } from "./components/FullScreenMenu";
import "./Header.scss";

export const Header = () => {
    const { documentationPages, componentPages } = useNavigationLinks();
    const profileDocPages = documentationPages.filter((page: DocumentationPageInfo) => page.path.includes("profil"));
    const getStartedDocPages = documentationPages.filter((page: DocumentationPageInfo) =>
        page.path.includes("komigang"),
    );
    return (
        <header className="jkl-portal-header">
            <Link to="/" className="jkl-portal-header__title">
                Jøkul
            </Link>
            <nav className="jkl-portal-header__navigation">
                <ul className="jkl-portal-header__navigation-list">
                    <li className="jkl-portal-header__navigation-item">
                        <FullScreenMenu filterable title="Profilen vår" items={profileDocPages} />
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
