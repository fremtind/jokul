import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import BetaTag from "../BetaTag";
import { GlobalSearch } from "./global-search/GlobalSearch";
import styles from "./header.module.scss";
import { Menu } from "./menu/Menu";
import { MenuItemList } from "./menu/MenuItemList";

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
            <GlobalSearch />
        </header>
    );
};
