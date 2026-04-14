import type { ComponentGridSize } from "@/utils/user-preferences";
import styles from "./overview.module.scss";

export type OverviewGridProps = {
    children: React.ReactNode;
    size?: ComponentGridSize;
};

export function OverviewGrid(props: OverviewGridProps) {
    const { children, size = "large" } = props;

    return (
        <ul data-grid-size={size} className={styles.grid}>
            {children}
        </ul>
    );
}
