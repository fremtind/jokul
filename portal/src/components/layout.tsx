/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react";
import Header from "./header";

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header siteTitle="Jøkul" />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0,
                }}
            >
                <main>{children}</main>
            </div>
        </>
    );
};

export default Layout;
