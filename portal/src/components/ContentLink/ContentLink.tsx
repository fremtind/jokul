import React, { FC } from "react";
import { Link } from "@fremtind/jkl-core";
import "./style.scss";

export const ContentLink: FC = ({ children }) => (
    <Link className="jkl-body jkl-sr-only jkl-sr-only--focusable jkl-portal__skip-to-content" href="#innhold">
        {children}
    </Link>
);
