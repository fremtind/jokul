import { useElementDimensions } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { FC } from "react";
import { useImageLoadingStatus } from "./useImageLoadingStatus";

export interface ImageProps {
    src: string;
    srcSet?: string;
    placeholder?: string;
    /**
     * Send inn en tom streng hvis bildet kun er dekorativt. Sannsynligvis bør du beskrive innholdet i bildet så en person med nedsatt syn får en fullgod opplevelse av siden.
     * Les mer på https://jokul.fremtind.no/universell-utforming/guide#uu/dekorativt-innhold
     */
    alt: string;
    className?: string;
}

export const Image: FC<ImageProps> = ({ className, placeholder, alt, ...imageProperties }) => {
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
                data-testid="jkl-image__image"
                ref={imageRef}
                sizes={`${dimensions.width}px`}
                loading="lazy"
                {...imageProperties}
            />
        </div>
    );
};
