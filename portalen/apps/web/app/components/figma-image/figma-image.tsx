import React, { type FC } from "react";

interface FigmaImageProps {
    alt?: string;
    /**
     * @example
     * ```jsx
     * <FigmaImage
     *   figmaUrl="https://www.figma.com/file/1dyjugRZg3rBNm2TAqFEn7/Portal-3.0-Eksempler-draft?node-id=347%3A46589"
     * />
     * ```
     */
    figmaUrl: string;
    /**
     * @example
     * ```jsx
     * <FigmaImage
     *   figmaUrl="https://www.figma.com/file/1dyjugRZg3rBNm2TAqFEn7/Portal-3.0-Eksempler-draft?node-id=347%3A46589"
     *   figmaUrlDark="https://www.figma.com/file/1dyjugRZg3rBNm2TAqFEn7/Portal-3.0-Eksempler-draft?node-id=347%3A46503"
     * />
     * ```
     */
    figmaUrlDark?: string;
}

export const FigmaImage: FC<FigmaImageProps> = ({ alt, figmaUrl, figmaUrlDark }) => {
    return (
        <picture>
            {figmaUrlDark && (
                <source
                    media="(prefers-color-scheme: dark)"
                    srcSet={`/api/figma/images?url=${encodeURIComponent(figmaUrlDark)}`}
                />
            )}
            <img
                src={`/api/figma/images?url=${encodeURIComponent(figmaUrl)}`}
                alt={alt}
                loading="lazy"
                decoding="async"
            />
        </picture>
    );
};
