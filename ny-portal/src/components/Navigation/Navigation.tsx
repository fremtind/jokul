import { Link } from "@fremtind/jokul";
import { clsx } from "clsx";
import styles from "./navigation.module.scss";
import { NavigationMenu } from "./NavigationMenu";
import { Search } from "./NavigationSearch";

export async function Navigation() {
    return (
        <div className={clsx(styles.navigation)}>
            <nav>
                <header className={styles["navigation__header"]}>
                    <div className={styles["navigation__headerColumn"]}>
                        <Link className={styles["navigation__home"]} href="/">
                            Jøkul
                        </Link>
                    </div>
                </header>
                <div
                    className={clsx(
                        styles.navigation__menu,
                        styles["navigation-menu"],
                    )}
                >
                    <Search />
                    <NavigationMenu />
                </div>
            </nav>
        </div>
    );
}
