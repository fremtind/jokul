import { client } from "@/sanity/lib/client";
import type { Jokul_doAndDont } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { GreenCheckIcon, RedCrossIcon } from "@fremtind/jokul/icon";
import type { PortableTextTypeComponentProps } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageObject } from "@sanity/image-url/lib/types/types";
import type { FC } from "react";

import styles from "./doAndDont.module.scss";

const builder = imageUrlBuilder(client);

function isSanityImageObject(source: unknown): source is SanityImageObject {
    return (
        typeof source === "object" &&
        source !== null &&
        "_type" in source &&
        (source as { _type?: string })._type === "image" &&
        "asset" in source
    );
}

function urlFor(source: unknown): string | undefined {
    if (!isSanityImageObject(source)) return undefined;
    if (!source.asset || !("_ref" in source.asset)) return undefined;
    return builder.image(source).url();
}

export const DoAndDont: FC<PortableTextTypeComponentProps<Jokul_doAndDont>> = ({
    value,
}) => {
    if (!value?.do && !value?.dont) return null;

    return (
        <Flex className={styles.container} gap="xs">
            <Card padding="l" className={styles.card}>
                <Flex
                    justifyContent="space-between"
                    style={{ paddingBottom: "16px" }}
                >
                    <h4>Riktig bruk</h4>
                    <GreenCheckIcon />
                </Flex>

                <img
                    className={styles.image}
                    src={urlFor(value.do)}
                    alt={value.do?.alt}
                />
            </Card>
            <Card padding="l" className={styles.card}>
                <Flex
                    justifyContent="space-between"
                    style={{ paddingBottom: "16px" }}
                >
                    <h4>Feil bruk</h4>
                    <RedCrossIcon />
                </Flex>

                <img
                    className={styles.image}
                    src={urlFor(value.dont)}
                    alt={value.dont?.alt}
                />
            </Card>
        </Flex>
    );
};
