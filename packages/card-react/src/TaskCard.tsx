import { Density, WithChildren } from "@fremtind/jkl-core";
import clsx from "clsx";
import React, { FC } from "react";
import { PaddingOptions } from "./types";
import { getPaddingStyles } from "./utils";

export interface TaskCardProps extends PaddingOptions, WithChildren {
    /**
     * Bakgrunnsfargen til kortet
     * @deprecated Bruk `background` i stedet
     */
    bgColor?: "hvit" | "snohvit" | "sand" | "dis";
    /**
     * Bestemmer bakgrunnsfargen til kortet, på tvers av mørkt eller lyst tema
     * @default "highlighted"
     */
    background?: "highlighted" | "normal" | "subdued";
    /**
     * Skal kortet ha skygge?
     * @default false
     */
    withShadow?: boolean;
    className?: string;
    density?: Density;
}

export const TaskCard: FC<TaskCardProps> = ({
    bgColor,
    background = "highlighted",
    withShadow = false,
    padding = "l",
    className,
    children,
    density,
    ...rest
}) => (
    <div
        className={clsx("jkl-task-card", className, {
            // Vi bruker kun background hvis bgColor ikke er satt, for å ikke bryte eksisterende kode
            [`jkl-task-card--${background}`]: !bgColor,
            [`jkl-task-card--${bgColor}`]: !!bgColor,
            "jkl-task-card--with-shadow": withShadow,
        })}
        data-density={density}
        {...rest}
    >
        <div className="jkl-task-card__content-wrapper" style={getPaddingStyles(padding)}>
            {children}
        </div>
    </div>
);
