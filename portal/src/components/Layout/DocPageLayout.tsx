import React, { ReactNode } from "react";
import { Layout } from ".";
import { GitHubLinks } from "./components";
import { useLocation } from "../../contexts/locationContext";
import "../Layout/Layout.scss";

interface Frontmatter {
    title: string;
    react?: string;
    scss?: string;
}

interface Props {
    location: Location;
    children: ReactNode;
    pageContext: {
        frontmatter: Frontmatter;
    };
}

export const DocPageLayout = ({ location, children, pageContext: { frontmatter } }: Props) => {
    const { setLocation } = useLocation();
    setLocation(location);
    return (
        <Layout location={location} title={frontmatter.title}>
            <ComponentDocPageTitle {...frontmatter} />
            {children}
        </Layout>
    );
};

function ComponentDocPageTitle({ title, scss, react }: Frontmatter) {
    if (!(react || scss)) {
        // Other doc pages have the title in markup
        // Return null to avoid duplicate title
        return null;
    }
    return (
        <>
            <h1 className="jkl-title-large">{title}</h1>
            <GitHubLinks react={react} scss={scss} />
        </>
    );
}

export default DocPageLayout;
