import React, { ReactNode } from "react";
import classNames from "classnames";

import "./Grid.scss";

interface Props {
    className?: string;
    children: ReactNode;
    size?: "medium" | "responsive";
}

export const Grid: React.SFC<Props> = ({ className, children, size = "medium" }: Props) => {
    const componentClassName = classNames(
        {
            "jkl-portal-grid": true,
            "jkl-portal-grid--medium": size === "medium",
        },
        className,
    );
    return (
        <div className={componentClassName}>
            {React.Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
                return <div className="jkl-portal-grid--col">{child}</div>;
            })}
        </div>
    );
};
