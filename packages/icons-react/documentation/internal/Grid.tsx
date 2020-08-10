import React, { CSSProperties } from "react";
import "./grid.scss";

interface Props {
    columns: "two" | "four";
    color: string;
    style?: CSSProperties;
}

export const Grid: React.FC<Props> = ({ color, columns, children, ...rest }) => (
    <div className={`jkl-example-grid jkl-example-grid--${columns}-columns jkl-color-${color}`} {...rest}>
        {children}
    </div>
);
