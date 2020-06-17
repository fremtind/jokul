import React, { ReactNode } from "react";
import { Layout } from ".";
import { useLocation } from "../../contexts/locationContext";
import { Frontmatter } from "../Header/useNavigationLinks";
import { ComponentPageHeader } from "./components/ComponentPageHeader";
import { BlogPageHeader } from "./components/BlogPageHeader";

import "../Layout/Layout.scss";

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
            <ComponentPageHeader {...frontmatter} />
            <BlogPageHeader {...frontmatter} />
            {children}
        </Layout>
    );
};

export default DocPageLayout;
