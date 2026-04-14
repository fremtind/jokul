import { getSanityImageUrl } from "@/sanity/lib/image";
import type { Jokul_doAndDont } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { GreenCheckIcon, RedCrossIcon } from "@fremtind/jokul/icon";
import type { PortableTextTypeComponentProps } from "@portabletext/react";
import type { FC } from "react";

import styles from "./doAndDont.module.scss";

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
                    src={getSanityImageUrl(value.do)}
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
                    src={getSanityImageUrl(value.dont)}
                    alt={value.dont?.alt}
                />
            </Card>
        </Flex>
    );
};
