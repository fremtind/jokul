import styles from "./komponenter.module.scss";

interface Props {
    children: React.ReactNode;
}

export default function PortalLayout({ children }: Props) {
    return <div className={styles.componentPage}>{children}</div>;
}
