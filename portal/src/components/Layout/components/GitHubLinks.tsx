import React from "react";

import "./GitHubLinks.scss";

interface LinkProps {
    href: string;
}
const ExternalLink: React.FC<LinkProps> = ({ href, children }) => (
    <a className="jkl-link jkl-portal-github-links__link" href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

interface Props {
    react?: string;
    scss?: string;
}

export function GitHubLinks({ react, scss }: Props) {
    if (!react && !scss) {
        return null;
    }
    const pkgLink = (pkgName: string) => `https://github.com/fremtind/jokul/tree/main/packages/${pkgName}`;

    return (
        <p className="jkl-portal-github-links">
            {react && <ExternalLink href={pkgLink(react)}>React</ExternalLink>}
            {scss && <ExternalLink href={pkgLink(scss)}>Sass</ExternalLink>}
        </p>
    );
}
