"use client";
import type { Jokul_linkCard } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { OpenInNewIcon } from "@fremtind/jokul/icon";
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
                        <a href={link.url} aria-label={link.title}>
                            <div className={styles.linkCard}>
                                <div className={"jkl-heading-4"}>
                                    <strong>{link.title}</strong>
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
