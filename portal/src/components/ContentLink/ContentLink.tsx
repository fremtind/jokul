import React, { FC } from "react";
import { WithChildren } from "@forbrukerradet/jkl-core";
import { Link } from "@forbrukerradet/jkl-core";
import "./style.scss";

export const ContentLink: FC<WithChildren> = ({ children }) => (
    <Link className="jkl-body jkl-sr-only jkl-sr-only--focusable jkl-portal__skip-to-content" href="#innhold">
        {children}
    </Link>
);
