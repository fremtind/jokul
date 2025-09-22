"use client";

import { useUserPreferences } from "@/utils/user-preferences";
import styles from "./component-grid.module.scss";

type ComponentGridProps = {
    children: React.ReactNode;
};

export function ComponentGrid({ children }: ComponentGridProps) {
    const { preferences } = useUserPreferences();

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
