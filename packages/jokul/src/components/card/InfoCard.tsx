import clsx from "clsx";
import React, { FC } from "react";
import { Density, WithChildren } from "../../core/types.js";
import { PaddingOptions, SpacingStep } from "./types.js";
import { getPaddingStyles } from "./utils.js";

export interface InfoCardProps extends PaddingOptions, WithChildren {
    className?: string;
    title?: string;
    /**
     * Legger til ekstra rom i bunnen av kortet, fra spacing-skalaen til Jøkul.
     */
    bottomPadding?: SpacingStep;
    density?: Density;
}

export const InfoCard: FC<InfoCardProps> = ({
    title,
    children,
    density,
    className,
    padding = "l",
    ...rest
}) => (
    <div
        {...rest}
        className={clsx("jkl-info-card", className)}
        data-density={density}
    >
        <div
            className={clsx("jkl-info-card__content-wrapper")}
            style={getPaddingStyles(padding)}
        >
            {title && <p className="jkl-info-card__title">{title}</p>}
            {children}
        </div>
    </div>
);
