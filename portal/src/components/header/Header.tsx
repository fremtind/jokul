import { Flex } from "@fremtind/jokul/flex";
import styles from "./header.module.scss";
import { MenuItemList } from "./menu/MenuItemList";
import { Menu } from "./menu/Menu";
import { Link } from "@fremtind/jokul/link";
import BetaTag from "../BetaTag";

export const Header = async () => {
    return (
        <Flex
            as="header"
            gap={32}
            alignItems="center"
            justifyContent="space-between"
            className={styles.header}
        >
            <Menu>
                <MenuItemList />
            </Menu>
            <Flex as="p" gap={8} alignItems="center">
                <Link href="/" className={styles.logo}>
                    Jøkul
                </Link>
                <BetaTag />
            </Flex>
        </Flex>
    );
};
