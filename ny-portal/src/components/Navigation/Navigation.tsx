import { Link } from "@fremtind/jokul";
import { clsx } from "clsx";
import styles from "./navigation.module.scss";
import { NavigationMenu } from "./NavigationMenu";
import { NavigationSearch } from "./NavigationSearch";

export async function Navigation() {
    return (
        <header className={styles["navigation__header"]}>
            <nav className={clsx(styles.navigation)}>
                <div className={styles["navigation__headerColumn"]}>
                    <Link className={styles["navigation__home"]} href="/">
                        Jøkul
                    </Link>
                </div>
                <div
                    className={clsx(
                        styles.navigation__menu,
                        styles["navigation-menu"],
                    )}
                >
                    <NavigationSearch />
                    <NavigationMenu />
                </div>
            </nav>
        </header>
    );
}
