/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react";
import Header from "./Header";
import { Menu } from "./Menu";

import "./Layout.scss";

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header siteTitle="Jøkul" />
            <Menu />
            <main className="portal-content">{children}</main>
        </>
    );
};

export default Layout;
