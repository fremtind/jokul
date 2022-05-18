import { WithChildren } from "@fremtind/jkl-core";
import React, { CSSProperties } from "react";
import "./icons-example-grid.scss";

interface IconsExampleGridProps extends WithChildren {
    columns: "two" | "four";
    color?: string;
    style?: CSSProperties;
}

export const IconsExampleGrid: React.FC<IconsExampleGridProps> = ({ color, columns, children, ...rest }) => (
    <div
        className={`jkl-example-grid jkl-example-grid--${columns}-columns ${color ? `jkl-color-${color}` : ""}`}
        {...rest}
    >
        {children}
    </div>
);
