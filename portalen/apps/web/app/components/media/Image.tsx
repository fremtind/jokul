import type { Media } from "@org/cms";
import cn from "classnames";
import React, { type FC, type ImgHTMLAttributes } from "react";
import { useTheme } from "~/utils/useTheme";

interface ImageProps
    extends Omit<
        ImgHTMLAttributes<HTMLImageElement>,
        "src" | "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"
    > {
    /**
     * Kilden til bildet, et Media-objekt fra CMSet.
     */
    src: Media | string | null;
    /**
     * Kilde som skal brukes i mørk modus. Hvis ikke satt, brukes `src` i begge tilfeller.
     */
    srcDark?: Media | string;
}

export const Image: FC<ImageProps> = ({
    className,
    src,
    srcDark,
    alt,
    ...imageAttributes
}) => {
    const prefersColorScheme = useTheme();
    const source = prefersColorScheme === "light" ? src : srcDark || src;

    if (typeof source === "string") {
        return (
            <img
                className={className}
                src={source}
                alt={alt || ""}
                {...imageAttributes}
            />
        );
    }

    if (!source) {
        return null;
    }

    // Media-collection kan inneholde videoer, som vi ikke vil rendre som bilder
    if (source.mimeType?.includes("video")) {
        return null;
    }

    // Sjekk at vi faktisk har et bilde å rendre
    if (!source.url || !source.sizes) {
        return null;
    }

    const { thumbnail, ...otherSizes } = source.sizes;
    const srcSet = Object.entries(otherSizes)
        .filter(([_, { url, width }]) => !!url && !!width)
        .map(([_, { url, width }]) => `${url} ${width}w`)
        .join(", ")
        .concat(`, ${source.url} ${source.width}w`);
    const dynamicSizes = Object.entries(otherSizes)
        .filter(([_, { url, width }]) => !!url && !!width)
        .map(([_, { width }]) => `(max-width: ${width}px) ${width}px`)
        .join(", ")
        .concat(`, ${source.width}px`);

    return (
        <img
            className={cn("jkl-portal-img", className)}
            src={source.url}
            alt={source.alt ?? alt}
            srcSet={srcSet}
            sizes={dynamicSizes}
            loading="lazy"
            decoding="async"
            width="100%"
            height="auto"
            {...imageAttributes}
        />
    );
};
