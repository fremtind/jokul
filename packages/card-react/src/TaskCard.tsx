import { Density, WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { FC } from "react";
import { PaddingOptions } from "./types";
import { getSpacingClasses } from "./utils";

export interface TaskCardProps extends PaddingOptions, WithChildren {
    /**
     * Bakgrunnsfargen til kortet
     * @default "hvit"
     */
    bgColor?: "hvit" | "snohvit" | "sand" | "dis";
    /**
     * Skal kortet ha skygge?
     * @default false
     */
    withShadow?: boolean;
    className?: string;
    density?: Density;
}

export const TaskCard: FC<TaskCardProps> = ({
    bgColor = "hvit",
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
