import React, { ReactNode } from "react";
import { Frontmatter } from "../Header/useNavigationLinks";
import { GitHubLinks } from "./components";

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
            <ComponentDocPageTitle {...frontmatter} />
            {children}
        </>
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
