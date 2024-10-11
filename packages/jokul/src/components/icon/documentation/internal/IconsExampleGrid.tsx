import React, { CSSProperties } from "react";
import { WithChildren } from "../../../../core";
import "./icons-example-grid.scss";

interface IconsExampleGridProps extends WithChildren {
    columns: "two" | "four";
    style?: CSSProperties;
}

export const IconsExampleGrid: React.FC<IconsExampleGridProps> = ({ columns, children, ...rest }) => (
    <div className={`jkl-example-grid jkl-example-grid--${columns}-columns`} {...rest}>
        {children}
    </div>
);
