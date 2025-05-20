"use client";
import { Card, OpenInNewIcon } from "@fremtind/jokul";
import { Flex } from "@fremtind/jokul/components/flex";
import { PortableTextTypeComponentProps } from "@portabletext/react";
import { FC } from "react";
import styles from "./linkCard.module.scss";
import { Jokul_linkCard } from "@/sanity/types";

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
