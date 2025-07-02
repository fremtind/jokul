"use client";

import { Card, CardImage } from "@fremtind/jokul/card";
import styles from "./komponenter.module.scss";

type Props = {
    lightImage: string;
    darkImage: string;
};

export function ComponentThumbnail({ darkImage, lightImage }: Props) {
    return (
        <Card variant="high" className={styles.image}>
            <picture>
                <source
                    media="(prefers-color-scheme: dark)"
                    srcSet={darkImage}
                />
                <CardImage as="img" placement="top" src={lightImage} alt="" />
            </picture>
        </Card>
    );
}
