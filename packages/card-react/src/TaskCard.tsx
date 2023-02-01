import { Density, WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { FC } from "react";
import { PaddingOptions } from "./types";
import { getSpacingClasses } from "./utils";

export interface TaskCardProps extends PaddingOptions, WithChildren {
    /**
     * Bakgrunnsfargen til kortet
     * Standard bakgrunn er nedtonet overflate (color.surface.subdued)
     * @default "subdued"
     */
    bgColor?: "subdued" | "highlighted" | "contrast" | "normal";
    /**
     * Skal kortet ha skygge?
     * @default false
     */
    withShadow?: boolean;
    className?: string;
    density?: Density;
}

export const TaskCard: FC<TaskCardProps> = ({
    bgColor = "subdued",
    withShadow = false,
    padding = "l",
    className,
    children,
    density,
    ...rest
}) => (
    <div
        className={cn("jkl-task-card", `jkl-task-card--${bgColor}`, className, {
            "jkl-task-card--with-shadow": withShadow,
        })}
        data-density={density}
        {...rest}
    >
        <div className={cn("jkl-task-card__content-wrapper", getSpacingClasses(padding))}>{children}</div>
    </div>
);
