/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react";
import { LocationProvider } from "@reach/router";
import Header from "../Header/Header";
import { Menu } from "../Menu/Menu";

import "./Layout.scss";

interface Props {
    children: ReactNode;
    title?: string;
    mainExample?: ReactNode;
}

export const Layout = ({ children, title, mainExample }: Props) => (
    <LocationProvider>
        {({ location }) => {
            if (location.search !== "?fullscreen") {
                return (
                    <>
                        <Header siteTitle="Jøkul" />
                        <Menu />

                        <main className="portal-content">
                            {title && <h2 className="jkl-h1 portal-content__title">{title}</h2>}
                            {mainExample}
                            {children}
                        </main>
                    </>
                );
            }
            return <main className="portal-component-only">{mainExample}</main>;
        }}
    </LocationProvider>
);

export default Layout;
