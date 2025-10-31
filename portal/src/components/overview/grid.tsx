import styles from "./overview.module.scss";

type OverviewGridProps = {
    title: string;
    children: React.ReactNode;
};

export function OverviewGrid(props: OverviewGridProps) {
    const { title, children } = props;

    return (
        <ul data-grid-size="large" aria-label={title} className={styles.grid}>
            {children}
        </ul>
    );
}
