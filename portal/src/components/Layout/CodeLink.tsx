import React, { ReactNode } from "react";
import "./Layout.scss";

interface Props {
    icon: ReactNode;
    link: string;
}

export const CodeLink = ({ icon, link }: Props) => (
    <a
        target="_blank"
        rel="noopener noreferrer"
        className="portal-content__code-links"
        href={`https://github.com/fremtind/jokul/tree/master/packages/${link}`}
    >
        {icon}
    </a>
);
