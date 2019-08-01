import React, { ReactNode } from "react";
import { LocationProvider } from "@reach/router";
import Layout from "./Layout";
import { ReactIcon, SassIcon } from "../icons";
import { CodeLink } from "./CodeLink";
import "./Layout.scss";

interface Props {
    children: ReactNode;
    title?: string;
    mainExample?: ReactNode;
    packageName?: string;
    packageNames?: {
        scss?: string;
        react?: string;
    };
}

export const ComponentLayout = ({ children, title, mainExample, packageName, packageNames }: Props) => (
    <LocationProvider>
        {({ location }) => {
            if (location.search !== "?fullscreen") {
                return (
                    <Layout isComponentPage>
                        <>
                            {title && (
                                <div className="portal-content__heading">
                                    <h2 className="jkl-h1 portal-content__title">{title}</h2>
                                    {packageName && (
                                        <div>
                                            <CodeLink icon={<ReactIcon />} link={`${packageName}-react`} />
                                            <CodeLink icon={<SassIcon />} link={packageName} />
                                        </div>
                                    )}
                                    {packageNames && (
                                        <div>
                                            {packageNames.react && (
                                                <CodeLink icon={<ReactIcon />} link={`${packageNames.react}`} />
                                            )}
                                            {packageNames.scss && (
                                                <CodeLink icon={<SassIcon />} link={packageNames.scss} />
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
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
