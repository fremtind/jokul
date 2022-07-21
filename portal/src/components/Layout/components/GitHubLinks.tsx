import { WithChildren } from "@fremtind/jkl-core";
import React, { FC } from "react";
import "./GitHubLinks.scss";

interface LinkProps extends WithChildren {
    href: string;
}
const ExternalLink: FC<LinkProps> = ({ href, children }) => (
    <a className="jkl-link" href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

interface Props {
    react?: string;
    scss?: string;
    versions?: {
        react: string | null;
        scss: string | null;
    };
}

export const GitHubLinks: FC<Props> = ({ react, scss, versions }) => {
    if (!react && !scss) {
        return null;
    }
    const pkgLink = (pkgName: string) => `https://github.com/fremtind/jokul/tree/main/packages/${pkgName}`;

    return (
        <p className="jkl-portal-github-links">
            {react && (
                <span className="jkl-portal-github-links__link">
                    <ExternalLink href={pkgLink(react)}>React</ExternalLink>{" "}
                    {versions?.react && (
                        <span className="jkl-portal-github-links__version">
                            <span className="jkl-sr-only">versjonsnummer {versions.react}</span>
                            <span aria-hidden="true" title={`${react} versjon ${versions.react}`}>
                                v{versions.react}
                            </span>
                        </span>
                    )}
                </span>
            )}
            {scss && (
                <span className="jkl-portal-github-links__link">
                    <ExternalLink href={pkgLink(scss)}>Sass</ExternalLink>
                    {versions?.scss && (
                        <span className="jkl-portal-github-links__version">
                            <span className="jkl-sr-only">versjonsnummer {versions.scss}</span>
                            <span aria-hidden="true" title={`${scss} versjon ${versions.scss}`}>
                                v{versions.scss}
                            </span>
                        </span>
                    )}
                </span>
            )}
        </p>
    );
};
