import clsx from "clsx";
import { forwardRef } from "react";
import { useElementDimensions } from "../../hooks/useElementDimensions/useElementDimensions.js";
import { mergeRefs } from "../../utilities/index.js";
import type { ImageProps } from "./types.js";
import { useImageLoadingStatus } from "./useImageLoadingStatus.js";

export const Image = forwardRef<HTMLImageElement, ImageProps>(
    ({ className, placeholder, alt, ...imageProperties }, ref) => {
        const [imageRef, imageLoaded] = useImageLoadingStatus();
        const [containerRef, dimensions] =
            useElementDimensions<HTMLDivElement>(400);

        const mergedImageRef = mergeRefs(ref, imageRef);

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
                    alt={imageLoaded ? "" : alt}
                    src={placeholder || imageProperties.src}
                />
                {/* biome-ignore lint/a11y/useAltText: Den har da vitterlig en alt-attributt? */}
                <img
                    alt={alt}
                    className="jkl-image__image"
                    data-testid="jkl-image__image"
                    ref={mergedImageRef}
                    sizes={`${dimensions.width}px`}
                    decoding="async"
                    loading="lazy"
                    {...imageProperties}
                />
            </div>
        );
    },
);

Image.displayName = "Image";
