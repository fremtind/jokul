"use client";
import type { Jokul_linkCard } from "@/sanity/types";
import { Card } from "@fremtind/jokul/components/card";
import { OpenInNewIcon } from "@fremtind/jokul/components/icon";
import { Flex } from "@fremtind/jokul/components/flex";
import type { PortableTextTypeComponentProps } from "@portabletext/react";
import type { FC } from "react";
import styles from "./linkCard.module.scss";

export const LinkCard: FC<PortableTextTypeComponentProps<Jokul_linkCard>> = ({
    value,
}) => {
    if (!value?.external_links?.length) return null;

    return (
        <Flex gap={12} className={styles.linkCardWrapper}>
            {value.external_links.map((link, index) => {
                return (
                    <Card
                        asChild
                        clickable={true}
                        variant="low"
                        key={link._key || index}
                    >
                        <a href={link.url}>
                            <div className={styles.linkCard}>
                                <div>
                                    <h4>
                                        <strong>{link.title}</strong>
                                    </h4>
                                    <OpenInNewIcon />
                                </div>

                                <p>{link.description}</p>
                            </div>
                        </a>
                    </Card>
                );
            })}
        </Flex>
    );
};
