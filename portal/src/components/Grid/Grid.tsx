import React from "react";
import cn from "classnames";
import { WithChildren } from "@forbrukerradet/jkl-core";
import "./Grid.scss";

interface Props extends WithChildren {
    className?: string;
    size?: "medium" | "responsive";
    /**
     * flex-direction column på små dingser
     * @default false
     */
    stackSmall?: boolean;
}

export const Grid: React.FC<Props> = ({ className, children, size = "medium", stackSmall }) => {
    return (
        <div
            className={cn("jkl-portal-grid", className, {
                "jkl-portal-grid--medium": size === "medium",
                "jkl-portal-grid--stack-small": stackSmall,
            })}
        >
            {React.Children.map(children, (child) => (
                <div className="jkl-portal-grid__col">{child}</div>
            ))}
        </div>
    );
};
