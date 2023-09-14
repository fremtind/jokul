import { WithChildren, Density } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { FC } from "react";
import { PaddingOptions, SpacingStep } from "./types";
import { getPaddingStyles } from "./utils";

export interface InfoCardProps extends PaddingOptions, WithChildren {
    className?: string;
    title?: string;
    /**
     * Legger til ekstra rom i bunnen av kortet, fra spacing-skalaen til Jøkul.
     */
    bottomPadding?: SpacingStep;
    density?: Density;
}

export const InfoCard: FC<InfoCardProps> = ({ title, children, density, className, padding = "l", ...rest }) => (
    <div {...rest} className={cn("jkl-info-card", className)} data-density={density}>
        <div className={cn("jkl-info-card__content-wrapper")} style={getPaddingStyles(padding)}>
            {title && <p className="jkl-info-card__title">{title}</p>}
            {children}
        </div>
    </div>
);
