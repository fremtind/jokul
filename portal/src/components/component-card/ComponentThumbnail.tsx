"use client";

import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageObject } from "@sanity/image-url/lib/types/types";

import styles from "./component-card.module.scss";

const builder = imageUrlBuilder(client);

// Bruk placeholderbilde midlertidig, mens vi finner ut av problemene
// med å hente figma-bilder under bygging av applikasjonen.
// Bruk getFigmaImageUrls for å hente figma-bilder når det er fikset.
const [fallbackLight, fallbackDark] = [
    "/component_placeholder_light.svg",
    "/component_placeholder_dark.svg",
];

function urlFor(source?: SanityImageObject | null) {
    return source?.asset?._ref ? builder.image(source).url() : undefined;
}

type Props = {
    lightImage?: SanityImageObject | null;
    darkImage?: SanityImageObject | null;
};

export function ComponentThumbnail({ darkImage, lightImage }: Props) {
    const imageLightUrl = urlFor(lightImage) || fallbackLight;
    const imageDarkUrl = urlFor(darkImage) || fallbackDark;

    return (
        <picture className={styles.componentThumbnail}>
            <source
                media="(prefers-color-scheme: dark)"
                srcSet={imageDarkUrl}
            />
            <img src={imageLightUrl} alt="" />
        </picture>
    );
}
