import React, { FC } from "react";
import cn from "classnames";
import { Image } from "@fremtind/jkl-image-react";
import { PaddingOptions, SpacingStep } from "./types";

// TODO: Eksporter typer fra Image-komponenten
type ImageProps = React.ComponentProps<typeof Image>;

export interface InfoCardProps extends PaddingOptions {
    className?: string;
    image?: Omit<ImageProps, "className">;
    /**
     * Legger til ekstra rom i bunnen av kortet, fra spacing-skalaen til Jøkul.
     */
    bottomPadding?: SpacingStep;
}

export const InfoCard: FC<InfoCardProps> = ({
    image,
    children,
    className,
    padding = "l",
    topPadding,
    bottomPadding,
}) => {
    const spacingClass = `jkl-spacing-${padding}--all`;
    const topSpacingClass = topPadding ? `jkl-spacing-${topPadding}--top` : "";
    const bottomSpacingClass = bottomPadding ? `jkl-spacing-${bottomPadding}--bottom` : "";
    return (
        <div className={cn("jkl-info-card", className)}>
            {image && <Image className="jkl-info-card__image" {...image} />}
            <div className={cn("jkl-info-card__content-wrapper", spacingClass, topSpacingClass, bottomSpacingClass)}>
                {children}
            </div>
        </div>
    );
};
