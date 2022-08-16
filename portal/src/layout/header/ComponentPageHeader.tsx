import React, { FC } from "react";
import { GitHubLinks } from "./GitHubLinks";
import type { Frontmatter } from "./useNavigationLinks";

type ComponentHeaderProps = Frontmatter & {
    versions?: {
        react: string | null;
        scss: string | null;
    };
};

export const ComponentPageHeader: FC<ComponentHeaderProps> = ({ title, scss, react, versions }) => {
    if (!(react || scss)) {
        // Other doc pages have the title in markup
        // Return null to avoid duplicate title
        return null;
    }
    return (
        <>
            <h1 className="jkl-title">{title}</h1>
            <GitHubLinks react={react} scss={scss} versions={versions} />
        </>
    );
};
