import { Link } from "@fremtind/jokul/link";
import { Logo } from "./Logo";
import { Menu } from "./menu/Menu";
import { MenuItemList } from "./menu/MenuItemList";

import styles from "./header.module.scss";

export const Header = async () => {
    return (
        <header className={styles.header}>
            <Menu>
                <MenuItemList />
            </Menu>
            <Link href="/" className={styles.logo}>
                <Logo />
            </Link>
        </header>
    );
};
