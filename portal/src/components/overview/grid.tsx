"use client";

import { useUserPreferences } from "@/utils/user-preferences";

import styles from "./overview.module.scss";

type ComponentGridProps = {
    title: string;
    children: React.ReactNode;
};

export function OverviewGrid(props: ComponentGridProps) {
    const { preferences } = useUserPreferences();

    const { title, children } = props;

    return (
        <ul
            data-grid-size={preferences.componentGridSize}
            aria-label={title}
            className={styles.grid}
        >
            {children}
        </ul>
    );
}
