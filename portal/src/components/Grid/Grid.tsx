import React from "react";
import cn from "classnames";
import { WithChildren } from "@fremtind/jkl-core";
import "./Grid.scss";

interface Props extends WithChildren {
    className?: string;
    size?: "medium" | "responsive";
}

export const Grid: React.FC<Props> = ({ className, children, size = "medium" }) => {
    return (
        <div
            className={cn("jkl-portal-grid", className, {
                "jkl-portal-grid--medium": size === "medium",
            })}
        >
            {React.Children.map(children, (child) => (
                <div className="jkl-portal-grid__col">{child}</div>
            ))}
        </div>
    );
};
