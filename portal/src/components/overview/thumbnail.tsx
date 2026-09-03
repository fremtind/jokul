import { getSanityImageUrl } from "@/sanity/lib/image";
import type { SanityImageLike } from "@/sanity/lib/image";
import type { StaticImageData } from "next/image";

import placeholderDark from "./component_placeholder_dark.svg";
import placeholderLight from "./component_placeholder_light.svg";
import styles from "./overview.module.scss";
import { resolveImageUrls } from "./resolveImageUrls";

// Bruk placeholderbilde midlertidig, mens vi finner ut av problemene
// med å hente figma-bilder under bygging av applikasjonen.
// Bruk getFigmaImageUrls for å hente figma-bilder når det er fikset.
//
// Next typer `*.svg`-importer som `any` (av hensyn til svgr), så vi sier
// eksplisitt hva vi forventer for å få typesjekk på `.src`.
const [fallbackLight, fallbackDark] = [
    (placeholderLight as StaticImageData).src,
    (placeholderDark as StaticImageData).src,
];

export type OverviewThumbnailProps = {
    lightImage?: SanityImageLike;
    darkImage?: SanityImageLike;
};

export function OverviewThumbnail({
    darkImage,
    lightImage,
}: OverviewThumbnailProps) {
    const lightImageUrl = getSanityImageUrl(lightImage);
    const darkImageUrl = getSanityImageUrl(darkImage);
    const imageUrls = resolveImageUrls(lightImageUrl, darkImageUrl, {
        light: fallbackLight,
        dark: fallbackDark,
    });

    return (
        <picture className={styles.thumbnail}>
            <source
                media="(prefers-color-scheme: dark)"
                srcSet={imageUrls.dark}
            />
            <img src={imageUrls.light} alt="" />
        </picture>
    );
}
