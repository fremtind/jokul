import React, { FC } from "react";
import cn from "classnames";
import { PaddingOptions } from "./types";
import { getSpacingClasses } from "./utils";

export interface TaskCardProps extends PaddingOptions {
    /**
     * Bakgrunnsfargen til kortet
     * @default "hvit"
     */
    bgColor?: "hvit" | "snohvit" | "sand" | "dis";
    /**
     * Skal kortet ha skygge?
     * @default false
     */
    shadow?: boolean;
    className?: string;
}

export const TaskCard: FC<TaskCardProps> = ({
    bgColor = "hvit",
    shadow = false,
    padding = "l",
    children,
    className,
}) => (
    <div
        className={cn("jkl-task-card", className, {
            [`jkl-task-card--${bgColor}`]: bgColor,
            "jkl-task-card--shadow": shadow,
        })}
    >
        <div className={cn("jkl-task-card__content-wrapper", getSpacingClasses(padding))}>{children}</div>
    </div>
);
