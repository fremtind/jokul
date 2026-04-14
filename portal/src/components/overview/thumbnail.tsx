import { getSanityImageUrl } from "@/sanity/lib/image";
import type { SanityImageLike } from "@/sanity/lib/image";

import styles from "./overview.module.scss";

// Bruk placeholderbilde midlertidig, mens vi finner ut av problemene
// med å hente figma-bilder under bygging av applikasjonen.
// Bruk getFigmaImageUrls for å hente figma-bilder når det er fikset.
const [fallbackLight, fallbackDark] = [
    "/component_placeholder_light.svg",
    "/component_placeholder_dark.svg",
];

export type OverviewThumbnailProps = {
    lightImage?: SanityImageLike;
    darkImage?: SanityImageLike;
};

export function OverviewThumbnail({
    darkImage,
    lightImage,
}: OverviewThumbnailProps) {
    const imageLightUrl = getSanityImageUrl(lightImage) || fallbackLight;
    const imageDarkUrl = getSanityImageUrl(darkImage) || fallbackDark;

    return (
        <picture className={styles.thumbnail}>
            <source
                media="(prefers-color-scheme: dark)"
                srcSet={imageDarkUrl}
            />
            <img src={imageLightUrl} alt="" />
        </picture>
    );
}
