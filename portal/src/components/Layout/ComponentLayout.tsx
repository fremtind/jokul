import React, { ReactNode } from "react";
import { LocationProvider } from "@reach/router";
import Layout from "./Layout";

import "./Layout.scss";

interface Props {
    children: ReactNode;
    title?: string;
    mainExample?: ReactNode;
}

export const ComponentLayout = ({ children, title, mainExample }: Props) => (
    <LocationProvider>
        {({ location }) => {
            if (location.search !== "?fullscreen") {
                return (
                    <Layout isComponent>
                        <>
                            {title && <h2 className="jkl-h1 portal-content__title">{title}</h2>}
                            <section className="portal-content__main-example">{mainExample}</section>
                            <section className="portal-content__rest">{children}</section>
                        </>
                    </Layout>
                );
            }
            return <main className="portal-component-only">{mainExample}</main>;
        }}
    </LocationProvider>
);

export default ComponentLayout;
