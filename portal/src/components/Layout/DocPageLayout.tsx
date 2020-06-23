import React, { ReactNode } from "react";
import { Frontmatter } from "../Header/useNavigationLinks";
import { BlogPageHeader, ComponentPageHeader } from "./components";

interface Props {
    location: Location;
    children: ReactNode;
    pageContext: {
        frontmatter: Frontmatter;
    };
}

export const DocPageLayout = ({ children, pageContext: { frontmatter } }: Props) => {
    return (
        <>
            <ComponentPageHeader {...frontmatter} />
            <BlogPageHeader {...frontmatter} />
            {children}
        </>
    );
};

export default DocPageLayout;
