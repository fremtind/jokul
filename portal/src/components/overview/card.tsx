import { Card } from "@fremtind/jokul/card";
import NextLink from "next/link";
import { useId } from "react";

import styles from "./overview.module.scss";

type OverviewCardProps = {
    title: string;
    description?: string;
    image?: string;
    link: string;
};

export const OverviewCard = (props: OverviewCardProps) => {
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
                {description && (
                    <p className={styles.description} id={`${id}-description`}>
                        {description}
                    </p>
                )}
                {image && <img alt="" src={image} className={styles.image} />}
            </Card>
        </li>
    );
};
