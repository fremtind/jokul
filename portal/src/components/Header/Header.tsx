import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

import "./Header.scss";

interface Props {
    siteTitle?: string;
    siteHeader?: string;
}

export const Header = ({ siteHeader = "Jøkul", siteTitle }: Props) => (
    <header className="portal-header">
        <Helmet>
            <html lang="no-nb" />
            <title>{siteTitle ? `${siteTitle} - ` : ""}Jøkul designsystem</title>
        </Helmet>
        <div className="portal-header__title jkl-h2">
            <Link to="/">{siteHeader}</Link>
        </div>
    </header>
);

export default Header;
