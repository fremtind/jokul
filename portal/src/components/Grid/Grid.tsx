import React, { ReactNode } from "react";
import classNames from "classnames";

import "./Grid.scss";

interface Props {
    className?: string;
    children: ReactNode;
    size?: "medium" | "responsive";
}

export const Grid: React.FC<Props> = ({ className, children, size = "medium" }) => {
    const componentClassName = classNames(
        {
            "jkl-portal-grid": true,
            "jkl-portal-grid--medium": size === "medium",
        },
        className,
    );
    return (
        <div className={componentClassName}>
            {React.Children.map(children, (child) => (
                <div className="jkl-portal-grid__col">{child}</div>
            ))}
        </div>
    );
};
