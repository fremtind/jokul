import { client } from "@/sanity/lib/client";
import type { FrontpageQueryResult } from "@/sanity/types";
import { Flex } from "@fremtind/jokul/flex";
import { createImageUrlBuilder } from "@sanity/image-url";
import styles from "./frontPageImageStrip.module.scss";

const builder = createImageUrlBuilder(client);

type FrontPageImage = NonNullable<
    NonNullable<FrontpageQueryResult["frontpage"]>["gridImages"]
>[number];

type FrontPageImageStripProps = {
    images?: FrontPageImage[] | null;
};

export const FrontPageImageStrip = ({ images }: FrontPageImageStripProps) => {
    const resolvedImages =
        images?.flatMap((image) => {
            if (!image.asset?._ref) {
                return [];
            }

            return [
                {
                    key: image.asset._ref,
                    src: builder.image(image).width(1600).auto("format").url(),
                },
            ];
        }) || [];

    if (!resolvedImages.length) {
        return null;
    }

    const marqueeSeedImages = Array.from(
        {
            length: Math.ceil(
                Math.max(resolvedImages.length, 6) /
                    resolvedImages.length,
            ),
        },
        () => resolvedImages,
    )
        .flat()
        .slice(0, Math.max(resolvedImages.length, 6));
    const animationDuration = `${Math.max(marqueeSeedImages.length * 12, 24)}s`;
    const marqueeImages = [...marqueeSeedImages, ...marqueeSeedImages];

    return (
        <section className={styles.imageStripViewport} aria-hidden="true" inert>
            <Flex
                alignItems="center"
                gap="s"
                className={styles.imageStripTrack}
                style={{ animationDuration }}
            >
                {marqueeImages.map((image, index) => (
                    <img
                        key={`${image.key}-${index}`}
                        src={image.src}
                        alt=""
                        loading="lazy"
                    />
                ))}
            </Flex>
        </section>
    );
};
