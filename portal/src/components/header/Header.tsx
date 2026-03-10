import { Link } from "@fremtind/jokul/link";
import { Logo } from "./Logo";
import { Menu } from "./menu/Menu";
import { MenuItemList } from "./menu/MenuItemList";

import { GlobalSearch } from "./global-search/GlobalSearch";
import styles from "./header.module.scss";

export const Header = async () => {
    return (
        <header className={styles.header}>
            <Menu>
                <MenuItemList />
            </Menu>
            <GlobalSearch />
            <Link href="/" className={styles.logo}>
                <Logo />
            </Link>
        </header>
    );
};
