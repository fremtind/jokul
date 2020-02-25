import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { Location } from "@reach/router";

import "./Header.scss";

interface Props {
    siteTitle?: string;
    siteHeader?: string;
}

export const Header = ({ siteHeader = "Jøkul", siteTitle }: Props) => (
    <Location>
        {({ location }) => {
            /* Vis sidetittelen som h1 på forsiden, som div ellers */
            const TitleElm = location.pathname === "/" ? "h1" : "div";
            return (
                <header className="portal-header">
                    <Helmet>
                        <html lang="no-nb" />
                        <title>{siteTitle ? `${siteTitle} - ` : ""}Jøkul designsystem</title>
                    </Helmet>
                    <TitleElm className="portal-header__title jkl-title-small">
                        <Link to="/">{siteHeader}</Link>
                    </TitleElm>
                </header>
            );
        }}
    </Location>
);

export default Header;
