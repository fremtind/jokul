import { Link } from "gatsby";
import React from "react";

import "./Header.scss";

interface Props {
    siteTitle?: string;
}

export const Header = ({ siteTitle = "" }: Props) => (
    <header className="portal-header">
        <h1 className="portal-header__title jkl-h2">
            <Link to="/">{siteTitle}</Link>
        </h1>
    </header>
);

export default Header;
