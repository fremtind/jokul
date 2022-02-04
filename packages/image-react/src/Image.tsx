import React, { VFC } from "react";
import cn from "classnames";
import { useElementDimensions } from "@fremtind/jkl-react-hooks";
import { useImageLoadingStatus } from "./useImageLoadingStatus";

export interface ImageProps {
    src: string;
    srcSet?: string;
    placeholder?: string;
    /**
     * Send inn en tom streng hvis bildet kun er dekorativt.
     * Les mer på https://jokul.fremtind.no/universell-utforming/guide#uu/dekorativt-innhold
     */
    alt: string;
    className?: string;
}

export const Image: VFC<ImageProps> = ({ className, placeholder, alt, ...imageProperties }) => {
    const [imageRef, imageLoaded] = useImageLoadingStatus();
    const [containerRef, dimensions] = useElementDimensions<HTMLDivElement>(400);

    return (
        <div
            ref={containerRef}
            className={cn("jkl-image", className, {
                "jkl-image--loading": !imageLoaded,
            })}
        >
            <img className="jkl-image__placeholder" alt={alt} src={placeholder || imageProperties.src} />
            <img
                alt={alt}
                className="jkl-image__image"
                ref={imageRef}
                sizes={`${dimensions.width}px`}
                loading="lazy"
                {...imageProperties}
            />
        </div>
    );
};
