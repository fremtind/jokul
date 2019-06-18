import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { H1 } from "@fremtind/jkl-typography-react";
import { Header } from "@fremtind/jkl-header-react";

interface DesktopHeaderProps {
    children: ReactNode;
}

const DesktopHeader = ({ children }: DesktopHeaderProps) => (
    <Header
        start={
            <Link style={{ color: "black", textDecoration: "none" }} to="/">
                <H1 styledAs="h4">Jøkul</H1>
            </Link>
        }
        center={<nav className="portal__header--menu portal__header--menu--desktop">{children}</nav>}
    />
);

export default DesktopHeader;
