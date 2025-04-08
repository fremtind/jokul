import { Flex } from "@fremtind/jokul/components/flex";
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

async function getFigmaImageUrls(figma_image: {
    light_mode?: string;
    dark_mode?: string;
}) {
    if (!figma_image.light_mode && !figma_image.dark_mode) {
        return [
            "/component_placeholder_light.svg",
            "/component_placeholder_dark.svg",
        ];
    }

    const requestOptions: RequestInit = {
        headers: [["X-FIGMA-TOKEN", process.env.FIGMA_IMAGE_READ_TOKEN || ""]],
    };

    const NO_IMAGE = {
        images: {
            none: "none.jpg",
        },
    };

    const fetchLightImage = figma_image.light_mode
        ? fetch(
              generateFigmaImageRequestUrl(figma_image.light_mode),
              requestOptions,
          ).then((response) => response.json())
        : new Promise(() => NO_IMAGE);

    const fetchDarkImage = figma_image.dark_mode
        ? fetch(
              generateFigmaImageRequestUrl(figma_image.dark_mode),
              requestOptions,
          ).then((response) => response.json())
        : new Promise(() => NO_IMAGE);

    const responses = await Promise.all([fetchLightImage, fetchDarkImage]);

    return responses.map(
        (response) => Object.values(response.images)[0] as string,
    );
}

export const ComponentCard = async ({ componentSlug }: Props) => {
    const component = await client.fetch(componentCardQuery, {
        componentSlug,
    });

    if (!component) return null;

    const [lightImage, darkImage] = await getFigmaImageUrls(
        component.figma_image || {},
    );

    return (
        <Flex
            as={NextLink}
            href={`/komponenter/${component.slug}`}
            gap={8}
            direction="column"
            className={styles.component}
        >
            <picture className={styles.image}>
                <source
                    media="(prefers-color-scheme: dark)"
                    srcSet={darkImage}
                />
                <img className={styles.image} src={lightImage} alt="" />
            </picture>
            <p className={styles.name}>{component.name}</p>
        </Flex>
    );
};
