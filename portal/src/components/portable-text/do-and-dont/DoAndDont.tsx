import { getSanityImageUrl } from "@/sanity/lib/image";
import type { Jokul_doAndDont } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { GreenCheckIcon, RedCrossIcon } from "@fremtind/jokul/icon";
import { Image } from "@fremtind/jokul/image";
import { Text } from "@fremtind/jokul/typography";
import type { PortableTextTypeComponentProps } from "@portabletext/react";
import type { FC } from "react";

import styles from "./doAndDont.module.scss";

const DoCard: FC<{ value: Jokul_doAndDont["do"] }> = ({ value }) => {
    const imageSrc = getSanityImageUrl(value);

    if (!imageSrc) {
        return null;
    }

    return (
        <Card padding="l" asChild>
            <Flex direction="column" gap="s">
                <Flex justifyContent="space-between">
                    <Text bold>Riktig</Text>
                    <GreenCheckIcon />
                </Flex>

                <Image
                    className={styles.image}
                    src={imageSrc}
                    alt={value?.alt || ""}
                />
            </Flex>
        </Card>
    );
};

const DontCard: FC<{ value: Jokul_doAndDont["dont"] }> = ({ value }) => {
    const imageSrc = getSanityImageUrl(value);

    if (!imageSrc) {
        return null;
    }

    return (
        <Card padding="l" asChild>
            <Flex direction="column" gap="s">
                <Flex justifyContent="space-between">
                    <Text bold>Feil</Text>
                    <RedCrossIcon />
                </Flex>

                <Image
                    className={styles.image}
                    src={imageSrc}
                    alt={value?.alt || ""}
                />
            </Flex>
        </Card>
    );
};

export const DoAndDont: FC<PortableTextTypeComponentProps<Jokul_doAndDont>> = ({
    value,
}) => {
    switch (true) {
        case !value?.do && !value?.dont:
            return null;
        case !value?.do:
            return <DontCard value={value.dont} />;
        case !value?.dont:
            return <DoCard value={value.do} />;
        default:
            return (
                <Flex gap="xs" wrap="wrap" fill aria-hidden="true">
                    <DoCard value={value.do} />
                    <DontCard value={value.dont} />
                </Flex>
            );
    }
};
