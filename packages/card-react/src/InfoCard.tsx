import { WithChildren, Density } from "@fremtind/jkl-core";
import { Image, ImageProps } from "@fremtind/jkl-image-react";
import cn from "classnames";
import React, { FC } from "react";
import { PaddingOptions, SpacingStep } from "./types";
import { getSpacingClasses } from "./utils";

export interface InfoCardProps extends PaddingOptions, WithChildren {
    className?: string;
    title?: string;
    image?: Omit<ImageProps, "className">;
    /**
     * Legger til ekstra rom i bunnen av kortet, fra spacing-skalaen til Jøkul.
     */
    bottomPadding?: SpacingStep;
    density?: Density;
}

export const InfoCard: FC<InfoCardProps> = ({ title, image, children, density, className, padding = "l", ...rest }) => (
    <div {...rest} className={cn("jkl-info-card", className)} data-density={density}>
        {image && <Image className="jkl-info-card__image" {...image} />}
        <div className={cn("jkl-info-card__content-wrapper", getSpacingClasses(padding))}>
            {title && <p className="jkl-info-card__title">{title}</p>}
            {children}
        </div>
    </div>
);
