"use client";

import { ComponentThumbnail } from "@/components/component-card/ComponentThumbnail";
import type { ComponentCardQueryResult } from "@/sanity/types";
import {
    type UserPreferences,
    useUserPreferences,
} from "@/utils/user-preferences";
import { Card } from "@fremtind/jokul/card";
import type { SanityImageObject } from "@sanity/image-url";
import NextLink from "next/link";

import styles from "./component-card.module.scss";

type ComponentCardProps = {
    component: ComponentCardQueryResult;
    initialPreferences?: UserPreferences;
};

export const ComponentCard = ({
    component,
    initialPreferences,
}: ComponentCardProps) => {
    const { preferences } = useUserPreferences(initialPreferences);

    if (!component) return null;

    return (
        <Card
            as={NextLink}
            href={`/komponenter/${component.slug}`}
            padding="l"
            className={styles.componentCard}
            aria-label={`Gå til ${component.name}` || "Gå til komponent"}
            aria-describedby={`${component.name}-description`}
        >
            <p className={styles.name}>{component.name}</p>
            {preferences.showComponentDescription && (
                <p
                    className={styles.description}
                    id={`${component.name}-description`}
                >
                    {component.short_description}
                </p>
            )}
            {preferences.showComponentImage && (
                <ComponentThumbnail
                    darkImage={component.imageDark as SanityImageObject}
                    lightImage={component.image as SanityImageObject}
                />
            )}
        </Card>
    );
};
