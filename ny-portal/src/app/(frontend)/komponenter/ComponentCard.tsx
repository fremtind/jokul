import NextLink from "next/link";
import styles from "./komponenter.module.scss";
import { client } from "@/sanity/client";
import { componentCardQuery } from "@/sanity/queries/component";

type Props = {
    componentSlug: string;
};

function extractFigmaQueryData(frameLink: string) {
    const url = new URL(frameLink);
    const frameId = url.searchParams.get("node-id");
    const [, , fileId] = url.pathname.split("/");

    return { fileId, frameId };
}

function generateFigmaImageRequestUrl(frameLink: string) {
    const { fileId, frameId } = extractFigmaQueryData(frameLink);
    return `https://api.figma.com/v1/images/${fileId}?ids=${frameId}&format=svg&scale=4`;
}

const requestOptions: RequestInit = {
    headers: [["X-FIGMA-TOKEN", process.env.FIGMA_IMAGE_READ_TOKEN || ""]],
};

function logFetchError(reason: any) {
    console.error(`Feilet under henting av thumbnail fra Figma`, reason);

    return undefined;
}

function fetchFigmaThumbnail(frameLink?: string) {
    if (!frameLink) {
        return new Promise(() => undefined);
    }

    return fetch(generateFigmaImageRequestUrl(frameLink), requestOptions)
        .then((response) => response.json().then((data) => data.images[0]))
        .catch(logFetchError);
}

async function getFigmaImageUrls(figma_image: {
    light_mode?: string;
    dark_mode?: string;
}) {
    const [lightThumb, darkThumb] = await Promise.all([
        fetchFigmaThumbnail(figma_image.light_mode),
        fetchFigmaThumbnail(figma_image.dark_mode),
    ]);

    return [
        lightThumb || "/component_placeholder_light.svg",
        darkThumb || "/component_placeholder_dark.svg",
    ];
}

export const ComponentCard = async ({ componentSlug }: Props) => {
    const component = await client.fetch(componentCardQuery, {
        componentSlug,
    });

    if (!component) return null;

    // Bruk placeholderbilde midlertidig, mens vi finner ut av problemene
    // med å hente figma-bilder under bygging av applikasjonen.
    // Bruk getFigmaImageUrls for å hente figma-bilder når det er fikset.
    const [lightImage, darkImage] = [
        "/component_placeholder_light.svg",
        "/component_placeholder_dark.svg",
    ];

    return (
        <NextLink
            href={`/komponenter/${component.slug}`}
            className={styles.componentCard}
            aria-label={component.name || "Gå til komponent"}
            aria-describedby={`${component.name}-description`}
        >
            <picture className={styles.image}>
                <source
                    media="(prefers-color-scheme: dark)"
                    srcSet={darkImage}
                />
                <img className={styles.image} src={lightImage} alt="" />
            </picture>
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
