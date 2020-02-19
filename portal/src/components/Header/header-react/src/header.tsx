import React from "react";
import { Link } from "gatsby";
import { Logo } from "@fremtind/jkl-logo-react";
import "../../header/header.scss";

export const Header = () => (
    <header className="portal-header">
        <Link to="/" className="portal-header__title">
            <strong>Jøkul</strong> Designsystem
        </Link>
        <div className="portal-header__logo">
            <Logo isSymbol centered={false} />
        </div>
    </header>
);
