import React, { ReactNode } from "react";
import { Layout } from ".";
import { GitHubLinks } from "./components";
import "../Layout/Layout.scss";

interface Props {
    location: Location;
    children: ReactNode;
    pageContext: {
        frontmatter: {
            title: string;
            react?: string;
            scss?: string;
        };
    };
}

export const ComponentLayout = ({
    location,
    children,
    pageContext: {
        frontmatter: { title, react, scss },
    },
}: Props) => {
    return (
        <Layout location={location} title={title} isComponentPage>
            <h1 className="jkl-title-large">{title}</h1>
            <GitHubLinks react={react} scss={scss} />
            {children}
        </Layout>
    );
};

export default ComponentLayout;
