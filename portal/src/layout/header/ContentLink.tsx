import { WithChildren, Link } from "@fremtind/jkl-core";
import React, { FC } from "react";
import "./style.scss";

export const ContentLink: FC<WithChildren> = ({ children }) => (
    <Link
        id="content-skip-link"
        className="body jkl-sr-only jkl-sr-only--focusable jkl-portal__skip-to-content"
        href="#innhold"
    >
        {children}
    </Link>
);
