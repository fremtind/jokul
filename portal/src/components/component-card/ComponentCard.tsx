"use client";

import { ComponentThumbnail } from "@/components/component-card/ComponentThumbnail";
import { client } from "@/sanity/lib/client";
import type { ComponentsQueryResult } from "@/sanity/types";
import { useUserPreferences } from "@/utils/user-preferences";
import { Card } from "@fremtind/jokul/card";
import imageUrlBuilder from "@sanity/image-url";
import NextLink from "next/link";

import styles from "./component-card.module.scss";

type ComponentCardProps = {
    component: ComponentsQueryResult[0] | null;
};

const builder = imageUrlBuilder(client);

function urlFor(source?: { asset?: { _ref: string }; _type: string }) {
    return source?.asset?._ref ? builder.image(source).url() : undefined;
}

export const ComponentCard = ({ component }: ComponentCardProps) => {
    const { preferences } = useUserPreferences();

    if (!component) return null;

    // Bruk placeholderbilde midlertidig, mens vi finner ut av problemene
    // med å hente figma-bilder under bygging av applikasjonen.
    // Bruk getFigmaImageUrls for å hente figma-bilder når det er fikset.
    const [fallbackLight, fallbackDark] = [
        "/component_placeholder_light.svg",
        "/component_placeholder_dark.svg",
    ];

    const imageLightUrl = component.image
        ? urlFor(component.image)
        : fallbackLight;
    const imageDarkUrl = component.imageDark
        ? urlFor(component.imageDark)
        : fallbackDark;

    return (
        <Card
            as={NextLink}
            href={`/komponenter/${component.slug}`}
            padding="l"
            className={styles.componentCard}
            aria-label={`Gå til ${component.name}` || "Gå til komponent"}
            aria-describedby={`${component.name}-description`}
        >
            <p className={styles.name}>{component.name}</p>
            {preferences.showComponentDescription && (
                <p
                    className={styles.description}
                    id={`${component.name}-description`}
                >
                    {component.short_description}
                </p>
            )}
            {preferences.showComponentImage && imageDarkUrl && imageLightUrl ? (
                <ComponentThumbnail
                    darkImage={imageDarkUrl}
                    lightImage={imageLightUrl}
                />
            ) : null}
        </Card>
    );
};
