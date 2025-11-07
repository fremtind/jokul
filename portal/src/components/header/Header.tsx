import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import BetaTag from "../BetaTag";
import { Menu } from "./menu/Menu";
import { MenuItemList } from "./menu/MenuItemList";

import styles from "./header.module.scss";

export const Header = async () => {
    return (
        <header className={styles.header}>
            <Menu>
                <MenuItemList />
            </Menu>
            <Flex as="p" gap="xs" alignItems="center">
                <Link href="/" className={styles.logo}>
                    Jøkul
                </Link>
                <BetaTag />
            </Flex>
        </header>
    );
};
