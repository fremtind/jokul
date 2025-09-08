import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import BetaTag from "../BetaTag";
import styles from "./SiteHeader.module.scss";
import { HamburgerButton } from "./menu/HamburgerButton";
import { MenuItemList } from "./menu/MenuItemList";

export const SiteHeader = async () => {
    const menuId = "global-menu";

    return (
        <Flex
            as="header"
            gap="lg"
            align="center"
            className={styles.globalHeader}
        >
            <Flex gap="md" justify="space-between" className={styles.banner}>
                <Flex as="p" gap="xs" align="center">
                    <Link href="/" className={styles.logo}>
                        Jøkul
                    </Link>
                    <BetaTag />
                </Flex>
                <HamburgerButton menuId={menuId} />
            </Flex>

            <nav aria-label="Hovednavigasjon" className={styles.menu}>
                <MenuItemList />
            </nav>
        </Flex>
    );
};
