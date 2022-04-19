import React, { FC, ReactNode } from "react";
import { Link } from "@fremtind/jkl-core";
import "./style.scss";

interface ContentLinkProps {
    children?: ReactNode;
}

export const ContentLink: FC<ContentLinkProps> = ({ children }) => (
    <Link className="jkl-body jkl-sr-only jkl-sr-only--focusable jkl-portal__skip-to-content" href="#innhold">
        {children}
    </Link>
);
