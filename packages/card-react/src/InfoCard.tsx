import { WithChildren, getCompactValue } from "@fremtind/jkl-core";
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
    /**
     * Skal bare brukes i informasjonstette applikasjoner.
     * @default false
     */
    compact?: boolean;
}

export const InfoCard: FC<InfoCardProps> = ({ title, image, children, compact, className, padding = "l", ...rest }) => (
    <div
        {...rest}
        className={cn("jkl-info-card", className, {
            "jkl-info-card--compact": compact,
        })}
        data-compact={getCompactValue(compact)}
    >
        {image && <Image className="jkl-info-card__image" {...image} />}
        <div className={cn("jkl-info-card__content-wrapper", getSpacingClasses(padding))}>
            {title && <p className="jkl-info-card__title">{title}</p>}
            {children}
        </div>
    </div>
);
