import { Navigation } from "@/components/layout/header/navigation/Navigation";
import { Link } from "@fremtind/jokul/link";
import { Logo } from "./Logo";

import styles from "../global-layout.module.scss";

export const Header = async () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <Link href="/" className={styles.logo}>
                    <Logo />
                </Link>
                <Navigation />
            </div>
        </header>
    );
};
