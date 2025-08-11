import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { componentCardQuery } from "@/sanity/queries/component";
import imageUrlBuilder from "@sanity/image-url";
import NextLink from "next/link";
import { ComponentThumbnail } from "./ComponentThumbnail";
import styles from "./komponenter.module.scss";

type Props = {
    componentSlug: string;
};

const builder = imageUrlBuilder(client);

function urlFor(source?: { asset?: { _ref: string }; _type: string }) {
    return source?.asset?._ref ? builder.image(source).url() : undefined;
}

export const ComponentCard = async ({ componentSlug }: Props) => {
    const { data: component } = await sanityFetch({
        query: componentCardQuery,
        requestTag: "component-card",
        params: { componentSlug },
    });

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
        <NextLink
            href={`/komponenter/${component.slug}`}
            className={styles.componentCard}
            aria-label={component.name || "Gå til komponent"}
            aria-describedby={`${component.name}-description`}
        >
            {imageDarkUrl && imageLightUrl ? (
                <ComponentThumbnail
                    darkImage={imageDarkUrl}
                    lightImage={imageLightUrl}
                />
            ) : null}
            <p className={styles.name}>{component.name}</p>
            <p
                className={styles.description}
                id={`${component.name}-description`}
            >
                {component.short_description}
            </p>
        </NextLink>
    );
};
