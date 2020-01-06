import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { Location } from "@reach/router";
import { LogoSymbol } from "@fremtind/jkl-logo-react";

import "./Header.scss";

interface Props {
    siteTitle?: string;
    siteHeader?: string;
}

export const Header = ({ siteHeader = "Jøkul Designsystem", siteTitle }: Props) => (
    <Location>
        {({ location }) => {
            /* Vis sidetittelen som h1 på forsiden, som div ellers */
            return (
                <header className="portal-header">
                    <Helmet>
                        <html lang="no-nb" />
                        <title>{siteTitle ? `${siteTitle} - ` : ""}Jøkul Designsystem</title>
                    </Helmet>
                    <div className="portal-header__title">
                        <Link to="/">
                            Jøkul <span className="portal-header__title-thin">Designsystem</span>
                        </Link>
                    </div>
                    <span className="portal-header__logo">
                        <LogoSymbol />
                    </span>
                </header>
            );
        }}
    </Location>
);

export default Header;
