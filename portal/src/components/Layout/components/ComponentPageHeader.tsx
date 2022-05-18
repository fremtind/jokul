import React, { FC } from "react";
import { Frontmatter } from "../../Header/useNavigationLinks";
import { GitHubLinks } from "./GitHubLinks";

export const ComponentPageHeader: FC<Frontmatter> = ({ title, scss, react }) => {
    if (!(react || scss)) {
        // Other doc pages have the title in markup
        // Return null to avoid duplicate title
        return null;
    }
    return (
        <>
            <h1 className="jkl-title">{title}</h1>
            <GitHubLinks react={react} scss={scss} />
        </>
    );
};
