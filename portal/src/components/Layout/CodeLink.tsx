import React, { ReactNode } from "react";

interface Props {
    icon: ReactNode;
    alt: string;
    link: string;
}

export const CodeLink = ({ icon, alt, link }: Props) => (
    <a
        target="_blank"
        rel="noopener noreferrer"
        className="portal-content__code-link"
        href={`https://github.com/fremtind/jokul/tree/master/packages/${link}`}
    >
        <span className="portal-content__code-link-text">{alt}</span>
        {icon}
    </a>
);
