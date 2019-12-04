import React, { ReactNode } from "react";
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
    <Layout title={title} isComponentPage>
        <>
            {title && (
                <div className="portal-content__heading">
                    <h2 className="jkl-h1 portal-content__title">{title}</h2>
                    {packageName && (
                        <div>
                            <CodeLink icon={<ReactIcon />} alt="React package" link={`${packageName}-react`} />
                            <CodeLink icon={<SassIcon />} alt="Style package" link={packageName} />
                        </div>
                    )}
                    {packageNames && (
                        <div>
                            {packageNames.react && (
                                <CodeLink alt="React package" icon={<ReactIcon />} link={`${packageNames.react}`} />
                            )}
                            {packageNames.scss && (
                                <CodeLink alt="Style package" icon={<SassIcon />} link={packageNames.scss} />
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

export default ComponentLayout;
