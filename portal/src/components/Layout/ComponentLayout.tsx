import React, { ReactNode } from "react";
import Layout from "./Layout";
import { ReactIcon, SassIcon } from "../icons";
import { CodeLink } from "./CodeLink";
import TypeLoader from "./TypeLoader";
import "./Layout.scss";

interface Props {
    children: ReactNode;
    pageContext: {
        frontmatter: {
            title: string;
            react?: string;
            scss?: string;
            types?: Array<string>;
        };
    };
}

export const ComponentLayout = ({
    children,
    pageContext: {
        frontmatter: { title, react, scss, types },
    },
}: Props) => (
    <Layout title={title} isComponentPage>
        <>
            <div className="portal-content__heading">
                <h2 className="jkl-h1 portal-content__title">{title}</h2>
                <div>
                    {react && <CodeLink alt="React package" icon={<ReactIcon />} link={`${react}`} />}
                    {scss && <CodeLink alt="Style package" icon={<SassIcon />} link={scss} />}
                </div>
            </div>
            <section className="portal-content__main">{children}</section>
            {types &&
                types.map((typeName) => (
                    <section key={typeName} className="portal-content__main jkl-spacing--top-2">
                        <TypeLoader path={`${react}/build/${typeName}`} />
                    </section>
                ))}
        </>
    </Layout>
);

export default ComponentLayout;
