import React, { FC, ReactNode } from "react";
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
    withShadow?: boolean;
    className?: string;
    children?: ReactNode;
}

export const TaskCard: FC<TaskCardProps> = ({
    bgColor = "hvit",
    withShadow = false,
    padding = "l",
    className,
    children,
    ...rest
}) => (
    <div
        className={cn("jkl-task-card", `jkl-task-card--${bgColor}`, className, {
            "jkl-task-card--with-shadow": withShadow,
        })}
        {...rest}
    >
        <div className={cn("jkl-task-card__content-wrapper", getSpacingClasses(padding))}>{children}</div>
    </div>
);
