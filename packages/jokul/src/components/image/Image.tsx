import clsx from "clsx";
import React, { FC } from "react";
import { useElementDimensions } from "../../hooks/useElementDimensions/useElementDimensions.js";
import { ImageProps } from "./types.js";
import { useImageLoadingStatus } from "./useImageLoadingStatus.js";

export const Image: FC<ImageProps> = ({
    className,
    placeholder,
    alt,
    ...imageProperties
}) => {
    const [imageRef, imageLoaded] = useImageLoadingStatus();
    const [containerRef, dimensions] =
        useElementDimensions<HTMLDivElement>(400);

    return (
        <div
            ref={containerRef}
            className={clsx("jkl-image", className, {
                "jkl-image--loading": !imageLoaded,
            })}
        >
            {/* Placeholder er bevisst uten loading og decoding for å vises umiddelbart */}
            <img
                className="jkl-image__placeholder"
                alt={alt}
                src={placeholder || imageProperties.src}
            />
            <img
                alt={alt}
                className="jkl-image__image"
                data-testid="jkl-image__image"
                ref={imageRef}
                sizes={`${dimensions.width}px`}
                loading="lazy"
                decoding="async"
                {...imageProperties}
            />
        </div>
    );
};
