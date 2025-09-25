"use client";

import {
    type UserPreferences,
    useUserPreferences,
} from "@/utils/user-preferences";
import styles from "./component-grid.module.scss";

type ComponentGridProps = {
    children: React.ReactNode;
    initialPreferences?: UserPreferences;
};

export function ComponentGrid({
    children,
    initialPreferences,
}: ComponentGridProps) {
    const { preferences } = useUserPreferences(initialPreferences);

    return (
        <ul
            data-grid-size={preferences.componentGridSize}
            aria-label="Komponenter"
            className={styles.componentGrid}
        >
            {children}
        </ul>
    );
}
