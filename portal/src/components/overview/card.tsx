"use client";

import { useUserPreferences } from "@/utils/user-preferences";
import { Card } from "@fremtind/jokul/card";
import NextLink from "next/link";
import { useId } from "react";

import styles from "./overview.module.scss";

type ComponentCardProps = {
    title: string;
    description?: string;
    image?: string;
    link: string;
};

export const OverviewCard = (props: ComponentCardProps) => {
    const { preferences } = useUserPreferences();
    const id = useId();

    const { link, title, description, image } = props;

    return (
        <li>
            <Card
                as={NextLink}
                href={link}
                padding="l"
                className={styles.card}
                aria-labelledby={`${id}-title`}
                aria-describedby={`${id}-description`}
            >
                <p className={styles.title} id={`${id}-title`}>
                    {title}
                </p>
                {description && preferences.showComponentDescription && (
                    <p className={styles.description} id={`${id}-description`}>
                        {description}
                    </p>
                )}
                {image && preferences.showComponentImage && (
                    <img alt="" src={image} className={styles.image} />
                )}
            </Card>
        </li>
    );
};
